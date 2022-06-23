const Sequelize = require('sequelize');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { BlogPost, User, Category } = require('../database/models');
const { messageErrorMissingFields, messageErrorCategoryNotFound } = require('../utils/messages');

const createPost = async ({ title, content, categoryIds }, id) => {
    if (!title || !content || !categoryIds) { throw messageErrorMissingFields; }
    try {
        const result = await sequelize.transaction(async (t) => {
            const blogPostCreate = await BlogPost.create({
                title, 
                content, 
                userId: id, 
                updated: new Date(),
                published: new Date(),
            }, { transaction: t });
            await blogPostCreate.addCategories(categoryIds, { transaction: t });
            return blogPostCreate;
          });
        return result;
    } catch (error) {
         throw messageErrorCategoryNotFound;
    }
};

const getAllPosts = () => {
    const getPosts = BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
});
    return getPosts;
};

const getPostById = (id) => {
    const postId = BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
});
    return postId;
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
};