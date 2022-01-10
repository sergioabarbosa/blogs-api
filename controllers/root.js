const express = require('express');
const user = require('./user/router');
const login = require('./login/router');

const root = express.Router({ mergeParams: true });

root.use('/user', user);
root.use('/login', login);

module.exports = root;