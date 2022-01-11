const express = require('express');
const user = require('./user');
const getUsers = require('./getUsers');
const findById = require('./findById');

const router = express.Router({ mergeParams: true });

router.post('/', user);
router.get('/', getUsers);
router.get('/:id', findById);

module.exports = router;