// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // IMportar rutas de autenticación
const competitionRoutes = require('./routes/competitions'); // Importar rutas de competiciones
const adminRoutes = require('./routes/admin'); // Importar rutas de administrador

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/competitions', competitionRoutes); // Rutas de competiciones
app.use('/api/admin', adminRoutes); // Rutas de administrador

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
