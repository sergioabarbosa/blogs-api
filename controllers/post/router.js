const express = require('express');
const blogPost = require('./blogPost');

const router = express.Router({ mergeParams: true });

router.post('/', blogPost);

module.exports = router;