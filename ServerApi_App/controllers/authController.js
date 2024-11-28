// controllers/authController.js
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registro de usuario
exports.register = async (req, res) => {
    const { name, email, password, rol, business_data } = req.body;

    // Validar que se incluyan los datos empresariales necesarios
    if (!business_data || !business_data.company_name || !business_data.RFC) {
        return res.status(400).send('Los datos empresariales son obligatorios');
    }

    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            rol,
            approval_status: 'pendiente',
            business_data,
        });

        // Guardar usuario en la base de datos
        await newUser.save();

        // Enviar correo al administrador para notificar el registro
        await sendEmailToAdmin(newUser);

        res.status(201).send('Usuario registrado, pendiente de aprobación');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('Usuario no encontrado');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Contraseña incorrecta');

        const token = jwt.sign({ id: user._id, rol: user.rol, }, process.env.JWT_SECRET, { expiresIn: '12h' });
        res.json({ token });
    } catch (error) {
        res.status(500).send('Error al iniciar sesión');
    }
};
// logout
exports.logout = (req, res) => {
    // Eliminar la cookie del token
    res.clearCookie('token'); // Asegúrate de que el nombre coincida con el usado al establecerla
    res.status(200).json({ message: 'Logout exitoso' });
};

// Función para enviar correo al administrador
const sendEmailToAdmin = async (user) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 2525,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: 'no-reply@yourapp.com',
        to: 'dreamtestmail1@gmail.com', // Cambia esto por la dirección de correo del administrador
        subject: 'Nuevo registro de usuario',
        text: `Un nuevo usuario se ha registrado:\n\nNombre: ${user.name}\nEmail: ${user.email}\nRol: ${user.rol}`,
    };

    await transporter.sendMail(mailOptions);
};