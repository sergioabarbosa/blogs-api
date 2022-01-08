const express = require('express');
const user = require('./user');

const router = express.Router({ mergeParams: true });

router.post('/', user);

module.exports = router;