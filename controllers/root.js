const express = require('express');
const user = require('./user/router');

const root = express.Router({ mergeParams: true });

root.use('/users', user);

module.exports = root;