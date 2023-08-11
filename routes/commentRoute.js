const express = require('express');
const router = express.Router();
const { createComment } = require('../controller/createCommentController');

router.get('/create', createComment);

module.exports = router;