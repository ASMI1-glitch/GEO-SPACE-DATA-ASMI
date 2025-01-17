const express = require('express');
const router = express.Router();
const shapeController = require('../controllers/shapeController');

// POST route for creating a shape
router.post('/create', shapeController.createShape);

// GET route for retrieving shapes
router.get('/shapes', shapeController.getShapes);

module.exports = router;
