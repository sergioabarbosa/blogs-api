const Errors = {
  NameExist: {
    code: 400, message: '"name" is required',
  },
};

const nameValidate = (name) => {
  if (!name) return Errors.NameExist;

  return {};
};

module.exports = {
  nameValidate,
}; 