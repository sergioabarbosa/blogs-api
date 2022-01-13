const { BlogPost } = require('../../models');
const { validToken } = require('../../TokenValidation/validToken');

module.exports = async (token) => {
  const Token = await validToken(token);

  if ('message' in Token) return Token;

  const post = await BlogPost.findAll({
    include: ['categories', 'user'],
  });

  return post;
}; 