const express = require('express');
const {
    getApprovedUsers,
    getPendingUsers,
    updateApprovalStatus,
    deleteUser,
} = require('../controllers/adminController');
const auth = require('../middleware/auth');

const router = express.Router();

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
    if (req.userRole !== 'admin') {
        return res.status(403).send('Acceso denegado. No tienes permisos de administrador.');
    }
    next();
};

// Rutas protegidas para administradores
router.get('/approved', auth, isAdmin, getApprovedUsers);
router.get('/pending', auth, isAdmin, getPendingUsers);
router.put('/approval-status', auth, isAdmin, updateApprovalStatus);
router.delete('/:userId', auth, isAdmin, deleteUser);

module.exports = router;