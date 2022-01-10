const { mailValidate, passValidate } = require('../../middlewares/errorsLogin');

module.exports = async ({ email, password }) => {
  const mailIsValid = await mailValidate(email);

  if ('message' in mailIsValid) return mailIsValid;

  const passwordValidation = await passValidate(password);

  if ('message' in passwordValidation) return passwordValidation;

  return {};
};