const { User } = require('../../models');
const { validToken } = require('../../TokenValidation/validToken');

module.exports = async ({ id }, token) => {
  const Token = await validToken(token);

  if ('message' in Token) return Token;

  const findById = await User.findByPk(id);

  if (!findById) return { code: 404, message: 'User does not exist' };

  return findById;
};