const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
    client_id: { type: String, required: true },
    competition_name: { type: String, required: true },
    description: { type: String, required: true },
    params: { type: Object, required: true },
    state: { type: String, default: 'activa' }, // Estado por defecto
    participating_suppliers: [{
        supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        selected_products: [{
            product_name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit_price: { type: Number, required: true },
            total: { type: Number, required: true } 
        }],
        purchase_orders: [{
            products: [{
                product_name: String,
                quantity: Number,
                unit_price: Number,
                total: Number,
            }],
            total: Number, // Total de la orden de compra
            state: String, // "pendiente", "completada", etc.
            payment_code: {
                qr_code: String,
                barcode: String,
                generation_date: Date,
                expiration_date: Date
            }
        }]
    }]
});

module.exports = mongoose.model('Competition', competitionSchema);