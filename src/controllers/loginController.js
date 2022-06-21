const express = require('express');

const authRouter = express.Router();
const loginService = require('../services/loginService');

authRouter.post('/', async (req, res) => {
    const token = await loginService.authenticationLogin(req.body);
    res.status(200).json(token);
});

module.exports = authRouter;