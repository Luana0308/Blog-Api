const express = require('express');
const loginController = require('../controllers/loginController');

const routers = express.Router();

routers.use('/login', loginController);

module.exports = routers;