const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST route for registering a new user
router.post('/register', authController.register);

// POST route for logging in a user
router.post('/login', authController.login);

module.exports = router;
