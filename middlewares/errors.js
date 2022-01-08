const { User } = require('../models');

const Errors = {
  ErrorNameType: {
    code: 401, message: 'displayName must be a string',
  },
  ErrorNameLength: {
    code: 400, message: '"displayName" length must be at least 8 characters long',
  },
  ErrorEmailAlreadyExist: {
    code: 409, message: 'User already registered',
  },
  ErrorEmailIsRequired: {
    code: 400, message: '"email" is required',
  },
  ErrorEmailIsValid: {
    code: 400, message: '"email" must be a valid email',
  },
  ErrorPasswordLength: {
    code: 400, message: '"password" length must be 6 characters long',
  },
  ErrorPasswordIsRequired: {
    code: 400, message: '"password" is required',
  },
};

const nameValidate = (name) => {
  if (typeof name !== 'string') return Errors.ErrorNameType;

  if (name.length < 8) return Errors.ErrorNameLength;

  return {};
};

const mailValidate = async (email) => {
  const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  if (!email || email.length < 1) return Errors.ErrorEmailIsRequired;

  if (!email.match(emailRegex)) return Errors.ErrorEmailIsValid;

  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) return Errors.ErrorEmailAlreadyExist;

  return {};
};

const passValidate = (password) => {
  if (!password) return Errors.ErrorPasswordIsRequired;

  if (password.length < 6) return Errors.ErrorPasswordLength;

  return {};
};

module.exports = {
  nameValidate,
  mailValidate,
  passValidate,
};