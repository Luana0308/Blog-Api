const express = require('express');
require('express-async-errors');
const loginController = require('../controllers/loginController');
const errorMiddleware = require('../middlewares/error');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const blogPostController = require('../controllers/blogPostController');

const routers = express.Router();

routers.use('/login', loginController);
routers.use('/user', userController);
routers.use('/categories', categoryController);
routers.use('/post', blogPostController);

routers.use(errorMiddleware);

module.exports = routers;