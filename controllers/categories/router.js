const express = require('express');

const categories = require('./categories');

const router = express.Router({ mergeParams: true });

router.post('/', categories);

module.exports = router;