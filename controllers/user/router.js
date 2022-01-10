const express = require('express');
const user = require('./user');
const getUsers = require('./getUsers');

const router = express.Router({ mergeParams: true });

router.post('/', user);
router.get('/', getUsers);

module.exports = router;