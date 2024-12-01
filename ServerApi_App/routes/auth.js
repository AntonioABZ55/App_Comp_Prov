// routes/auth.js
const express = require('express');
const { body, validationResult } = require('express-validator'); // Importa las funciones necesarias
const { register, login, logout } = require('../controllers/authController');
const router = express.Router();

router.post(
    '/register',
    [
        body('name').notEmpty().withMessage('El nombre es obligatorio'),
        body('email').isEmail().withMessage('El correo no es válido'),
        body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
        body('business_data.company_name').notEmpty().withMessage('El nombre de la empresa es obligatorio'),
        body('business_data.RFC').notEmpty().withMessage('El RFC es obligatorio'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        await register(req, res);
    }
);

router.post('/login', login);

router.post('/logout', logout);

module.exports = router;
