const express = require('express');

const categories = require('./categories');
const getCategories = require('./getCategories');

const router = express.Router({ mergeParams: true });

router.post('/', categories);
router.get('/', getCategories);

module.exports = router;