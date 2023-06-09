const express = require('express');
const user = require('./user/router');
const login = require('./login/router');
const categories = require('./categories/router');
const post = require('./post/router');

const root = express.Router({ mergeParams: true });

root.use('/user', user);
root.use('/login', login);
root.use('/categories', categories);
root.use('/post', post);

module.exports = root;