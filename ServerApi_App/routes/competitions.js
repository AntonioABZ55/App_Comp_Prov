// routes/competitions.js
const express = require('express');
const { 
    createCompetition, 
    getCompetitions, 
    deleteCompetition, 
    joinCompetition, 
    getParticipatingSuppliers,
    getCompetitionsBySupplier,
    leaveCompetition,
    createPurchaseOrder,
    generateQRCode,
    cancelPurchaseOrder 
} = require('../controllers/competitionController');
const auth = require('../middleware/auth');
const router = express.Router();

// Crear Competencia
router.post('/create', auth, createCompetition); // POST /api/competitions/create

// Obtener Todas las Competencias
router.get('/all', auth, getCompetitions); // GET /api/competitions/all

// Eliminar Competencia
router.delete('/delete/:id', auth, deleteCompetition); // DELETE /api/competitions/delete/:id

// Obtener Proveedores que Participan en una Competencia
router.get('/:competitionId/suppliers', auth, getParticipatingSuppliers); // GET /api/competitions/:competitionId/suppliers

// Unirse a una Competencia
router.post('/:competitionId/join', auth, joinCompetition); // POST /api/competitions/:competitionId/join

// Competencias de un Proveedor
router.get('/supplier/competitions', auth, getCompetitionsBySupplier); // GET /api/supplier/competitions

// Salirse de una Competencia
router.delete('/:competitionId/leave', auth, leaveCompetition); // DELETE /api/competitions/:competitionId/leave

// Crear Orden de Compra
router.post('/:competitionId/:supplierId/orders/create', auth, createPurchaseOrder); // POST /api/competitions/:competitionId/:supplierId/orders/create

// Ruta para generar el código QR para una orden de compra específica
router.post('/:competitionId/:supplierId/orders/generate-qr', auth, generateQRCode); // POST /api/competitions/:competitionId/:supplierId/orders/:orderId/generate-qr

// Cancelar Orden de Compra
router.patch('/:competitionId/orders/:orderId/cancel', auth, cancelPurchaseOrder); // PATCH /api/competitions/:competitionId/orders/:orderId/cancel

module.exports = router;
