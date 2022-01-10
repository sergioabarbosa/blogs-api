const { User } = require('../../models');
const { validToken } = require('../../TokenValidation/validToken');

module.exports = async (token) => {
  const Token = await validToken(token);

  if ('message' in Token) return Token;

  const getAll = await User.findAll();

  return getAll;
};