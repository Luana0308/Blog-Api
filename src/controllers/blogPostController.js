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

module.exports = blogPostRouter;