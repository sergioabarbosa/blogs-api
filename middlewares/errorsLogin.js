const { User } = require('../models');

const LoginErrors = {
  ErrorEmailIsRequired: {
    code: 400, message: '"email" is required',
  },
  ErrorEmailIsEmpty: {
    code: 400, message: '"email" is not allowed to be empty',
  },
  ErrorPasswordIsRequired: {
    code: 400, message: '"password" is required',
  },
  ErrorPasswordIsEmpty: {
    code: 400, message: '"password" is not allowed to be empty',
  },
  ErrorInvalidUser: {
    code: 400, message: 'Invalid fields',
  },
};

const mailValidate = async (email) => {
  if (email === '') return LoginErrors.ErrorEmailIsEmpty;

  if (!email) return LoginErrors.ErrorEmailIsRequired;

  const mailNotExist = await User.findOne({ where: { email } });

  if (!mailNotExist) return LoginErrors.ErrorInvalidUser;

  return {};
};

const passValidate = (password) => {
  if (password === '') return LoginErrors.ErrorPasswordIsEmpty;

  if (!password) return LoginErrors.ErrorPasswordIsRequired;

  return {};
};

module.exports = {
  mailValidate,
  passValidate,
};