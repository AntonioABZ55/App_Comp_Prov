// controllers/competitionController.js
const QRCode = require('qrcode');
const Competition = require('../models/Competition');
const User = require('../models/User');

// Crear una nueva competencia
exports.createCompetition = async (req, res) => {
    const { competition_name, description, params } = req.body;
    const clientId = req.userId; // Este valor proviene del token decodificado

    console.log('Client ID:', clientId); // Verifica que este valor no sea undefined

    try {
        const newCompetition = new Competition({
            competition_name,
            description,
            client_id: clientId, // Asegúrate de que este campo se esté llenando
            params
        });

        await newCompetition.save();
        res.status(201).json({ message: 'Competencia creada exitosamente' });
    } catch (error) {
        console.error('Error al crear la competencia:', error); // Log para ver detalles del error
        res.status(500).send('Error al crear la competencia: ' + error.message);
    }
};

// Función para obtener todas las competencias de un cliente
exports.getCompetitionsByClient = async (req, res) => {
    const clientId = req.userId; // Suponiendo que el ID del cliente viene del token de autenticación

    try {
        // Buscar todas las competencias asociadas al cliente
        const competitions = await Competition.find({ client_id: clientId });

        // Validar si el cliente tiene competencias
        if (competitions.length === 0) {
            return res.status(404).json({ message: 'No se encontraron competencias para este cliente' });
        }

        res.status(200).json({
            message: 'Competencias encontradas',
            competitions
        });
    } catch (error) {
        console.error('Error al obtener competencias del cliente:', error);
        res.status(500).send('Error al obtener competencias del cliente');
    }
};

// Función para ordenar los proveedores de una competencia de menor a mayor
exports.sortSuppliersInCompetition = async (req, res) => {
    const { competitionId } = req.params; // Obtener ID de la competencia
    try {
        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Obtener productos disponibles en params
        const productsInParams = competition.params.products_services;

        // Ordenar los proveedores dentro de la competencia de menor a mayor
        const sortedSuppliers = competition.participating_suppliers.sort((a, b) => {
            // Contar cuántos productos seleccionados están en los productos disponibles de la competencia
            const countSelectedProductsA = a.selected_products.filter(product => productsInParams.includes(product.product_name)).length;
            const countSelectedProductsB = b.selected_products.filter(product => productsInParams.includes(product.product_name)).length;

            // Calcular el total por proveedor
            const totalA = a.selected_products.reduce((total, product) => {
                return total + (product.quantity * product.unit_price);
            }, 0);

            const totalB = b.selected_products.reduce((total, product) => {
                return total + (product.quantity * product.unit_price);
            }, 0);

            // Priorizar por el número de productos seleccionados
            if (countSelectedProductsA === countSelectedProductsB) {
                // Si la cantidad de productos es igual, ordenar por el total (de menor a mayor)
                return totalA - totalB; // De menor a mayor
            }
            return countSelectedProductsA - countSelectedProductsB; // Ordenar por número de productos seleccionados (menor a mayor)
        });

        // Devolver la competencia con los proveedores ordenados
        res.status(200).json({
            message: 'Proveedores ordenados exitosamente',
            competition: {
                participating_suppliers: sortedSuppliers
            }
        });
    } catch (error) {
        console.error('Error al ordenar proveedores:', error);
        res.status(500).send('Error al ordenar proveedores');
    }
};

// Obtener todas las competencias
exports.getCompetitions = async (req, res) => {
    try {
        const competitions = await Competition.find();
        res.json(competitions);
    } catch (error) {
        res.status(500).send('Error al obtener competencias');
    }
};

// Eliminar una competencia
exports.deleteCompetition = async (req, res) => {
    const { id } = req.params;

    try {
        const competition = await Competition.findByIdAndDelete(id);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }
        res.status(200).json({ message: 'Competencia eliminada', competition });
    } catch (error) {
        res.status(500).send('Error al eliminar competencia');
    }
};

// Función para unirse a una competencia
exports.joinCompetition = async (req, res) => {
    const { competitionId } = req.params; // ID de la competencia
    const { selectedProducts } = req.body; // Productos seleccionados por el proveedor
    const supplierId = req.userId; // ID del proveedor (proveniente del token)

    try {
        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Obtener los productos de la competencia
        const { tender_type, products_services } = competition.params;

        // Validar que los productos seleccionados existan en `products_services`
        const validProducts = selectedProducts.every(selectedProduct =>
            products_services.some(product => product.name === selectedProduct.product_name)
        );
        console.log(selectedProducts)
        console.log(products_services)
        console.log(validProducts)

        if (!validProducts) {
            return res.status(400).json({ message: 'Algunos productos seleccionados no existen en la competencia' });
        }

        // Validar si el tipo de competencia es "general" y requiere todos los productos
        if (tender_type === "general") {
            const allProductsSelected = products_services.every(product =>
                selectedProducts.some(selectedProduct => selectedProduct.product_name === product.name)
            );

            if (!allProductsSelected) {
                return res.status(400).json({ 
                    message: 'Debe participar con todos los productos en una competencia de tipo general' 
                });
            }
        }

        // Calcular el total para cada producto seleccionado
        const totalOrder = selectedProducts.reduce((total, product) => {
            const productTotal = product.quantity * product.unit_price;
            total += productTotal;
            return total;
        }, 0);

        // Verificar si el proveedor ya se unió a la competencia
        const supplierIndex = competition.participating_suppliers.findIndex(supplier => 
            supplier.supplier_id.toString() === supplierId.toString()
        );

        if (supplierIndex !== -1) {
            // El proveedor ya está registrado, solo actualizamos los productos seleccionados
            competition.participating_suppliers[supplierIndex].selected_products = selectedProducts.map(product => ({
                ...product,
                total: product.quantity * product.unit_price // Agregar el total
            }));
        } else {
            // Si el proveedor no está registrado, lo agregamos
            competition.participating_suppliers.push({
                supplier_id: supplierId,
                selected_products: selectedProducts.map(product => ({
                    ...product,
                    total: product.quantity * product.unit_price // Agregar el total
                })),
                purchase_orders: [] // Inicialmente sin órdenes de compra
            });
        }

        await competition.save();
        res.status(200).json({ message: 'Proveedor unido a la competencia', competition });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al unirse a la competencia');
    }
};

// Obtener los proveedores que participan en una competencia
exports.getParticipatingSuppliers = async (req, res) => {
    const { competitionId } = req.params;
    console.log(`Competition ID: ${competitionId}`);

    try {
        const competition = await Competition.findById(competitionId)
            .populate('participating_suppliers.supplier_id', 'name email rol'); // Traemos los datos del proveedor

        console.log('Competition Data:', competition);

        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        res.json({
            participating_suppliers: competition.participating_suppliers
        });
    } catch (error) {
        console.error('Error:', error); // Imprimir el error en la consola
        res.status(500).send('Error al obtener los proveedores');
    }
};

// Función para obtener todas las competencias en las que un proveedor está participando
exports.getCompetitionsBySupplier = async (req, res) => {
    const supplierId = req.userId; // Suponiendo que el ID del proveedor está en el token de autenticación

    try {
        // Buscar competencias donde el proveedor está en la lista de proveedores participantes
        const competitions = await Competition.find({
            participating_suppliers: { $elemMatch: { supplier_id: supplierId } }
        });

        if (competitions.length === 0) {
            return res.status(404).send('No se encontraron competencias para este proveedor');
        }

        res.json({
            message: 'Competencias encontradas',
            competitions: competitions
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({'nombre': 'Error al obtener competencias', 'err': error.message});
    }
};

// Función para que un proveedor se salga de una competencia
exports.leaveCompetition = async (req, res) => {
    const { competitionId } = req.params;
    const supplierId = req.userId; // Suponiendo que el ID del proveedor está en el token de autenticación

    try {
        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Encontrar al proveedor en la competencia
        const supplier = competition.participating_suppliers.find(
            supplier => supplier.supplier_id.toString() === supplierId
        );
        if (!supplier) {
            return res.status(404).send('Proveedor no encontrado en esta competencia');
        }

        // Validar si hay órdenes de pago generadas con estados diferentes a "pendiente"
        const hasPaymentOrder = supplier.purchase_orders.some(order => order.state);
        if (hasPaymentOrder) {
            return res.status(400).json({
                message: 'No puedes salir de la competencia porque ya tienes una orden de pago generada'
            });
        }
        console.log(hasPaymentOrder)
        console.log('Purchase Orders:', supplier.purchase_orders);

        // Eliminar al proveedor de la lista de participantes
        competition.participating_suppliers = competition.participating_suppliers.filter(
            supplier => supplier.supplier_id.toString() !== supplierId
        );
        await competition.save(); // Guardar los cambios en la base de datos

        res.json({
            message: 'Proveedor se ha salido de la competencia exitosamente',
            competition: competition // Puedes devolver la competencia actualizada si lo deseas
        });
    } catch (error) {
        console.error('Error al salir de la competencia:', error);
        res.status(500).send({
            nombre: 'Error al salir de la competencia',
            err: error.message
        });
    }
};


// Función para crear una nueva orden de compra con los productos seleccionados por el proveedor
exports.createPurchaseOrder = async (req, res) => {
    const { competitionId, supplierId } = req.params; // Obtener ID de la competencia y del proveedor

    try {
        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Buscar al proveedor en la lista de participantes
        const supplier = competition.participating_suppliers.find(supplier => supplier.supplier_id.toString() === supplierId);
        if (!supplier) {
            return res.status(404).send('Proveedor no encontrado en esta competencia');
        }

        // Obtener los productos seleccionados por el proveedor
        const { selected_products } = supplier;
        if (!selected_products || selected_products.length === 0) {
            return res.status(400).send('El proveedor no tiene productos seleccionados para esta competencia');
        }

        // Calcular el total de la orden
        const totalOrder = selected_products.reduce((total, product) => {
            return total + (product.quantity * product.unit_price);
        }, 0);

        // Crear la nueva orden de compra
        const newOrder = {
            products: selected_products.map(product => ({
                product_name: product.product_name,
                quantity: product.quantity,
                unit_price: product.unit_price,
                total: product.quantity * product.unit_price // Calcular el total de cada producto
            })),
            total: totalOrder, // Total de todos los productos
            state: 'pendiente',
            payment_code: {
                qr_code: '',
                barcode: '',
                generation_date: null,
                expiration_date: null
            }
        };

        // Agregar la orden al proveedor correspondiente
        supplier.purchase_orders.push(newOrder); // Agregar la nueva orden a las órdenes del proveedor
        await competition.save(); // Guardar los cambios en la competencia

        res.status(201).json({ message: 'Orden de compra creada exitosamente', order: newOrder });
    } catch (error) {
        console.error('Error al crear la orden de compra:', error);
        res.status(500).send('Error al crear la orden de compra');
    }
};

// Funcion para generar un código QR para el pago
exports.generateQRCode = async (req, res) => {
    const { competitionId, supplierId, orderId } = req.params;

    try {
        // Verificar los parámetros recibidos
        console.log('Parametros recibidos:', { competitionId, supplierId, orderId });

        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Encontrar el proveedor
        const supplier = competition.participating_suppliers.find(s => s.supplier_id.toString() === supplierId);
        if (!supplier) {
            return res.status(404).send('Proveedor no encontrado en esta competencia');
        }

        // Verificar las órdenes del proveedor
        console.log('Órdenes del proveedor:', supplier.purchase_orders);

        // Buscar la orden de compra
        const order = supplier.purchase_orders.find(o => o._id.toString() === orderId);
        console.log('/Order: ',order)
        
        if (!order) {
            return res.status(404).send('Orden de compra no encontrada');
        }

        console.log('Orden encontrada:', order);

        // Generar el código QR si aún no se ha generado
        if (order.payment_code.qr_code) {
            return res.status(400).send('El código QR ya ha sido generado para esta orden');
        }

        const qrData = `OrderID: ${orderId}, Total: ${order.total}, SupplierID: ${supplierId}`;
        const qrCode = await QRCode.toDataURL(qrData);

        // Actualizar la orden con el código QR
        order.payment_code.qr_code = qrCode;
        order.payment_code.generation_date = new Date();
        await competition.save();

        res.status(200).json({ message: 'Código QR generado exitosamente', qrCode });
    } catch (error) {
        console.error('Error al generar el código QR:', error);
        res.status(500).send('Error al generar el código QR');
    }
};

// Función para eliminar una orden de compra si no tiene un código de pago generado
exports.deletePurchaseOrder = async (req, res) => {
    const { competitionId, supplierId, orderId } = req.params;

    try {
        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Encontrar al proveedor
        const supplier = competition.participating_suppliers.find(
            s => s.supplier_id.toString() === supplierId
        );
        if (!supplier) {
            return res.status(404).send('Proveedor no encontrado en esta competencia');
        }

        // Buscar la orden de compra
        const orderIndex = supplier.purchase_orders.findIndex(
            o => o._id.toString() === orderId
        );
        if (orderIndex === -1) {
            return res.status(404).send('Orden de compra no encontrada');
        }

        const order = supplier.purchase_orders[orderIndex];

        // Verificar si la orden ya tiene un código de pago generado
        if (order.payment_code.qr_code || order.payment_code.barcode) {
            return res.status(400).json({
                message: 'No se puede eliminar la orden porque ya tiene un código de pago generado'
            });
        }

        // Eliminar la orden de compra
        supplier.purchase_orders.splice(orderIndex, 1);
        await competition.save();

        res.status(200).json({
            message: 'Orden de compra eliminada exitosamente',
            competition
        });
    } catch (error) {
        console.error('Error al eliminar la orden de compra:', error);
        res.status(500).send('Error al eliminar la orden de compra');
    }
};
