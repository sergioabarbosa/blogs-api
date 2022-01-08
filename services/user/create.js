const { nameValidate, mailValidate, passValidate } = require('../../middlewares/errors');

module.exports = async ({ displayName, email, password }) => {
  const nameValidation = await nameValidate(displayName);

  if ('message' in nameValidation) return nameValidation;

  const emailValidation = await mailValidate(email);

  if ('message' in emailValidation) return emailValidation;

  const passwordlValidation = await passValidate(password);

  if ('message' in passwordlValidation) return passwordlValidation;

  return {};
};