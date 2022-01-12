const { Categorie } = require('../models');

const Errors = {
  ErrorTitleExist: {
    code: 400, message: '"title" is required',
  },
  ErrorCategoryIdsExist: {
    code: 400, message: '"categoryIds" is required',
  },
  ErrorCategoryIdsNotFound: {
    code: 400, message: '"categoryIds" not found',
  },
  ErrorContentExist: {
    code: 400, message: '"content" is required',
  },
};

const validTitle = (title) => {
  if (!title) return Errors.ErrorTitleExist;

  return {};
};

const validIdCategory = async (categoryIds) => {
  if (!categoryIds) return Errors.ErrorCategoryIdsExist;

  const categories = await Categorie.findAll({ attributes: { exclude: ['name'] } });

  const dataBaseIds = categories.map((category) => category.id);

  for (let i = 0; i < categoryIds.length; i += 1) {
    if (!dataBaseIds.includes(categoryIds[i])) return Errors.ErrorCategoryIdsNotFound;
  }

  return {};
};

const validContent = (content) => {
  if (!content) return Errors.ErrorContentExist;

  return {};
};

module.exports = {
  validTitle,
  validIdCategory,
  validContent,
};