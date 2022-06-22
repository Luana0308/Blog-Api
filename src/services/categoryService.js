const { Category } = require('../database/models');
// const { messageErrorCategory } = require('../utils/messages');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });

    // if (!name) {
    //     throw messageErrorCategory;
    // }

    return newCategory;
};

module.exports = {
    createCategory,
};