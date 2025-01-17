const express = require('express');
const router = express.Router();
const markerController = require('../controllers/markerController');
const authMiddleware = require('../middlewares/authMiddleware');

// POST route for creating a marker
router.post('/create', authMiddleware, markerController.createMarker);

// GET route for retrieving all markers
router.get('/', markerController.getMarkers);

// PUT route for updating a marker
router.put('/:id', authMiddleware, markerController.updateMarker);

// DELETE route for deleting a marker
router.delete('/:id', authMiddleware, markerController.deleteMarker);

module.exports = router;
