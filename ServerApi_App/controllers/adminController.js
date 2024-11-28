const User = require('../models/User');
const nodemailer = require('nodemailer');

// Configurar el transporte de nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

// Función para enviar correo de rechazo
const sendRejectionEmail = async (user) => {
    const mailOptions = {
        from: 'no-reply@yourapp.com',
        to: user.email,
        subject: 'Estado de aprobación actualizado',
        text: `Hola ${user.name}, lamentamos informarte que tu registro ha sido rechazado. Si tienes preguntas, por favor contáctanos.`,
    };

    await transporter.sendMail(mailOptions);
};

// Obtener usuarios aprobados
exports.getApprovedUsers = async (req, res) => {
    try {
        const users = await User.find({ approval_status: 'aprobado' });
        res.json(users);
    } catch (error) {
        res.status(500).send('Error al obtener usuarios aprobados');
    }
};

// Obtener usuarios pendientes
exports.getPendingUsers = async (req, res) => {
    try {
        const users = await User.find({ approval_status: 'pendiente' });
        res.json(users);
    } catch (error) {
        res.status(500).send('Error al obtener usuarios pendientes');
    }
};

// Actualizar el estado de aprobación
exports.updateApprovalStatus = async (req, res) => {
    const { userId, approval_status } = req.body;

    // Validar que el nuevo estado sea válido
    if (!['aprobado', 'rechazado', 'pendiente'].includes(approval_status)) {
        return res.status(400).send('Estado de aprobación no válido');
    }

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).send('Usuario no encontrado');

        user.approval_status = approval_status;
        await user.save();

        // Si el estado es "rechazado", enviar correo
        if (approval_status === 'rechazado') {
            await sendRejectionEmail(user);
        }

        res.json({ message: 'Estado de aprobación actualizado', user });
    } catch (error) {
        res.status(500).send('Error al actualizar el estado de aprobación');
    }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) return res.status(404).send('Usuario no encontrado');

        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).send('Error al eliminar usuario');
    }
};