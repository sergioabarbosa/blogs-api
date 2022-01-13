const { BlogPost } = require('../../models');
const { validToken } = require('../../TokenValidation/validToken');

module.exports = async ({ id }, token) => {
  const Token = await validToken(token);

  if ('message' in Token) return Token;

  const getBlogPostById = await BlogPost.findByPk(id, {
    include: ['user', 'categories'],
  });

  if (!getBlogPostById) return { code: 404, message: 'Post does not exist' };

  return getBlogPostById;
}; 