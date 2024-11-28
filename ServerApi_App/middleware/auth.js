// middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token no proporcionado');

    // Eliminar "Bearer " del token
    const bearerToken = token.split(' ')[1];

    jwt.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send('Token no válido');

        // Asumimos que el token tiene los campos id y client_id
        req.userId = decoded.id; // ID del usuario
        req.userRole = decoded.rol; // Rol del usuario
        req.clientId = decoded.client_id; // Client ID del usuario (debes asegurarte de incluirlo en el token al generarlo)

        next();
    });
};

module.exports = auth;