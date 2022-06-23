const express = require('express');
const { validateEmail } = require('../middlewares/validateEmail');
const { validateName } = require('../middlewares/validateName');
const { validatePassword } = require('../middlewares/validatePassword');
const { authToken } = require('../middlewares/authToken');

const userRouter = express.Router();

const userService = require('../services/userService');

userRouter.post('/', 
    validateName, 
    validateEmail,
    validatePassword, 
    async (req, res) => {
        const tokenNewUser = await userService.createUser(req.body);
        res.status(201).json(tokenNewUser);
});

userRouter.get('/', authToken, async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
});

userRouter.get('/:id', authToken, async (req, res) => {
    const { id } = req.params;
    const userId = await userService.getUserId(id);
    res.status(200).json(userId);
});

module.exports = userRouter;