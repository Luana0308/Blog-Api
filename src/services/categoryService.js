const { Category } = require('../database/models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getAllCategories = async () => {
    const categories = await Category.findAll({
        attributes: ['id', 'name'],
    });
    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};