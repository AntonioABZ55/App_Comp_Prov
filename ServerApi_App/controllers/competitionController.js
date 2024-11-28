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

        // Calcular el total para cada producto seleccionado
        const totalOrder = selectedProducts.reduce((total, product) => {
            const productTotal = product.quantity * product.unit_price;
            total += productTotal;
            return total;
        }, 0);

        // Verificar si el proveedor ya se unió a la competencia
        const supplierIndex = competition.participating_suppliers.findIndex(supplier => supplier.supplier_id.toString() === supplierId.toString());
        
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
        // Buscar la competencia y eliminar al proveedor de la lista de proveedores participantes
        const competition = await Competition.findByIdAndUpdate(
            competitionId,
            { $pull: { participating_suppliers: { supplier_id: supplierId } } },
            { new: true } // Devuelve el documento actualizado
        );

        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        res.json({
            message: 'Proveedor se ha salido de la competencia exitosamente',
            competition: competition // Puedes devolver la competencia actualizada si lo deseas
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({'nombre': 'Error al salir de la competencia', 'err': error.message});
    }
};

// Función para crear una nueva orden de compra con múltiples productos
exports.createPurchaseOrder = async (req, res) => {
    const { competitionId, supplierId } = req.params; // Obtener ID de la competencia y del proveedor
    const { products } = req.body; // Productos de la orden

    try {
        // Buscar la competencia
        const competition = await Competition.findById(competitionId);
        if (!competition) {
            return res.status(404).send('Competencia no encontrada');
        }

        // Calcular el total de la orden
        const totalOrder = products.reduce((total, product) => {
            return total + (product.quantity * product.unit_price);
        }, 0);

        // Crear la nueva orden de compra
        const newOrder = {
            products: products.map(product => ({
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
        const supplier = competition.participating_suppliers.find(supplier => supplier.supplier_id.toString() === supplierId);
        if (!supplier) {
            return res.status(404).send('Proveedor no encontrado en esta competencia');
        }
        
        supplier.purchase_orders.push(newOrder); // Agregar la nueva orden a las órdenes del proveedor
        await competition.save(); // Guardar los cambios en la competencia

        res.status(201).json({ message: 'Orden de compra creada exitosamente', order: newOrder });
    } catch (error) {
        console.error('Error al crear la orden de compra:', error);
        res.status(500).send('Error al crear la orden de compra');
    }
};

// Función para generar un código QR para una orden de compra
exports.generateQRCode = async (req, res) => {
    const { competitionId, supplierId, orderId } = req.params;

    try {
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

        // Encontrar la orden de compra
        const order = supplier.purchase_orders.find(o => o._id.toString() === orderId);
        if (!order) {
            return res.status(404).send('Orden de compra no encontrada');
        }

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


// Función para cancelar una orden de compra sin código QR generado
exports.cancelPurchaseOrder = async (req, res) => {
    const { competitionId, supplierId, orderId } = req.params;

    try {
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

        // Encontrar la orden de compra
        const orderIndex = supplier.purchase_orders.findIndex(o => o._id.toString() === orderId);
        if (orderIndex === -1) {
            return res.status(404).send('Orden de compra no encontrada');
        }

        const order = supplier.purchase_orders[orderIndex];

        // Verificar si tiene un código QR generado
        if (order.payment_code.qr_code) {
            return res.status(400).send('No se puede cancelar una orden con un código QR generado');
        }

        // Eliminar la orden de compra
        supplier.purchase_orders.splice(orderIndex, 1);
        await competition.save();

        res.status(200).json({ message: 'Orden de compra cancelada exitosamente' });
    } catch (error) {
        console.error('Error al cancelar la orden de compra:', error);
        res.status(500).send('Error al cancelar la orden de compra');
    }
};
