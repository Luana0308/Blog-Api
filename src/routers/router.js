const express = require('express');
require('express-async-errors');
const loginController = require('../controllers/loginController');
const errorMiddleware = require('../middlewares/error');
const userController = require('../controllers/userController');

const routers = express.Router();

routers.use('/login', loginController);
routers.use('/user', userController);

routers.use(errorMiddleware);

module.exports = routers;