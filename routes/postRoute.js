const express = require('express');
const router = express.Router();
const { createPost } = require('../controller/createPostController');
const { getPost } = require('../controller/getPostController');

router.get('/create', createPost);
router.get('/', getPost);

module.exports = router;