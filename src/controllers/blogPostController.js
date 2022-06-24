const express = require('express');

const blogPostRouter = express.Router();
const { authToken } = require('../middlewares/authToken');
const blogPostService = require('../services/blogPostService');

blogPostRouter.post('/', authToken, async (req, res) => {
    const { id } = res.locals.payload;
    const newPost = await blogPostService.createPost(req.body, id);
    res.status(201).json(newPost);
});

blogPostRouter.get('/', authToken, async (req, res) => {
    const getAllPosts = await blogPostService.getAllPosts();
    res.status(200).json(getAllPosts);
});

blogPostRouter.get('/search', authToken, async (req, res) => {
    const { q } = req.query;

    if (!q) {
        const getAllPosts = await blogPostService.getAllPosts();
        res.status(200).json(getAllPosts);
    }

    const searchPost = await blogPostService.getSearchPost(q);
    res.status(200).json(searchPost);
});

blogPostRouter.get('/:id', authToken, async (req, res) => {
    const { id } = req.params;
    const getPostById = await blogPostService.getPostById(id);
    res.status(200).json(getPostById);
});

blogPostRouter.put('/:id', authToken, async (req, res) => {
    const { id } = res.locals.payload;
    const updatedPost = await blogPostService.updatePostId(id, req.body, req.params);
    res.status(200).json(updatedPost);
});

blogPostRouter.delete('/:id', authToken, async (req, res) => {
    const { id } = res.locals.payload;
     await blogPostService.deletePostId(id, req.params);
    res.status(204).send();
});

module.exports = blogPostRouter;

// https://pt.stackoverflow.com/questions/355872/como-utilizar-o-like-do-sql-no-sequelize