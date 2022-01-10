const express = require('express');
const user = require('./user/router');

const root = express.Router({ mergeParams: true });

root.use('/user', user);

module.exports = root;