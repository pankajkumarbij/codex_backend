const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const checkAuth = require('../middleware/auth');

router.post('/post', postController.Post);
router.get('/posts', checkAuth, postController.GetPosts);
router.get('/postById/:id', checkAuth, postController.GetPostById);

module.exports = router;