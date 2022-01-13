const express = require('express');
const blogPost = require('./blogPost');
const getBlogPost = require('./getBlogPost');

const router = express.Router({ mergeParams: true });

router.post('/', blogPost);
router.get('/', getBlogPost);

module.exports = router;