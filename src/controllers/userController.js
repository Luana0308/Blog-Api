const express = require('express');
const { validateEmail } = require('../middlewares/validateEmail');
const { validateName } = require('../middlewares/validateName');
const { validatePassword } = require('../middlewares/validatePassword');
const { authToken } = require('../middlewares/authToken');

const authRouter = express.Router();

const userService = require('../services/userService');

authRouter.post('/', 
    validateName, 
    validateEmail,
    validatePassword, 
    async (req, res) => {
        const tokenNewUser = await userService.createUser(req.body);
        res.status(201).json(tokenNewUser);
});

authRouter.get('/', authToken, async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
});

module.exports = authRouter;