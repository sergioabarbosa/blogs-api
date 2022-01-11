const { Categorie } = require('../../models');
const { validToken } = require('../../TokenValidation/validToken');
const { nameValidate } = require('../../middlewares/errorsCategories');

module.exports = async ({ name }, token) => {
  const Token = await validToken(token);

  if ('message' in Token) return Token;

  const nameValid = await nameValidate(name);

  if ('message' in nameValid) return nameValid;

  const categorie = await Categorie.create({ name });

  return categorie;
};