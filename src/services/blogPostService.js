const { BlogPost, User, Category } = require('../database/models');
const { messageErrorMissingFields } = require('../utils/messages');

const createPost = async (info, id) => {
    const { title, content, categoryIds } = info;
    if (!title || !content || !categoryIds) {
        throw messageErrorMissingFields;
    }
    const createPostBlog = await BlogPost.create({
        title, 
        content, 
        userId: id, 
        updated: new Date(),
        published: new Date(),
    });
    return createPostBlog;
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

module.exports = {
    createPost,
    getAllPosts,
};