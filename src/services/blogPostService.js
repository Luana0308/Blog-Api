const Sequelize = require('sequelize');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { BlogPost, User, Category } = require('../database/models');
const { messageErrorMissingFields, 
        messageErrorCategoryNotFound,
        messageErrorInvalidUser, 
        messageErrorPostInvalid } = require('../utils/messages');

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

const getPostById = async (id) => {    
    const postId = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    if (!postId) {
        throw messageErrorPostInvalid;
    }

    return postId;
};

const updatePostId = async (tokenId, body, params) => {
    const { id } = params;
    const { title, content } = body;
     const verifyUserUpdate = await BlogPost.findOne({
        attributes: ['userId'],
        where: { id },
    });
        if (verifyUserUpdate.userId !== tokenId) throw messageErrorInvalidUser;
        if (!title || !content) throw messageErrorMissingFields;
        
     await BlogPost.update(
        { 
          title, 
          content, 
          updated: new Date(),
        }, 
        { where: { id } },
      );
    return getPostById(id);
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostId,
};