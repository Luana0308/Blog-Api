const express = require('express');
const { authToken } = require('../middlewares/authToken');
const categoryService = require('../services/categoryService');
const { messageErrorCategory } = require('../utils/messages');

const categoryRouter = express.Router();

categoryRouter.post('/', authToken, async (req, res) => {
    const { name } = req.body;

    if (!name) {
        throw messageErrorCategory;
    }

    const newCategory = await categoryService.createCategory(name);
    res.status(201).json(newCategory);
});

categoryRouter.get('/', authToken, async (req, res) => {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
});

module.exports = categoryRouter;