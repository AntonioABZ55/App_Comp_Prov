// models/User.js
const mongoose = require('mongoose');

//Estructura para guardar los documentos
const documentSchema = new mongoose.Schema({
    name_archivo: { type: String, required: true },
    type: { type: String, required: true },
    content: { type: Buffer, required: true } // Almacena el contenido en formato binario
});
//Estructura de los datos empresariales
const businessDataSchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    RFC: { type: String, required: true },
    documents: [documentSchema]
});
//Estructura del usuario
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, default: 'cliente' },
    approval_status: { type: String, default: 'pendiente' },
    business_data: businessDataSchema,
    registration_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema)