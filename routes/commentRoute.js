const express = require('express');
const router = express.Router();
const { createComment } = require('../controller/createCommentController');

router.post('/create', createComment);

module.exports = router;