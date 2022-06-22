const express = require('express');
const { authToken } = require('../middlewares/authToken');
const categoryService = require('../services/categoryService');
const { messageErrorCategory } = require('../utils/messages');

const authRouter = express.Router();

authRouter.post('/', authToken, async (req, res) => {
    const { name } = req.body;

    if (!name) {
        throw messageErrorCategory;
    }

    const newCategory = await categoryService.createCategory(name);
    res.status(201).json(newCategory);
});

module.exports = authRouter;