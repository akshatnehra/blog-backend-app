const express = require('express');
const router = express.Router();
const { likePost } = require('../controller/likePostController');
const { unlikePost } = require('../controller/unlikePostController');

router.post('/like', likePost);
router.post('/unlike', unlikePost);

module.exports = router;