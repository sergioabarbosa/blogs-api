const express = require('express');
const blogPost = require('./blogPost');
const getBlogPost = require('./getBlogPost');
const getBlogPostById = require('./getBlogPostById');

const router = express.Router({ mergeParams: true });

router.post('/', blogPost);
router.get('/', getBlogPost);
router.get('/:id', getBlogPostById);

module.exports = router;