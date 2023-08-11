const express = require('express');
const router = express.Router();
const { likePost } = require('../controller/likePostController');
const { unlikePost } = require('../controller/unlikePostController');

router.get('/like', likePost);
router.get('/unlike', unlikePost);

module.exports = router;