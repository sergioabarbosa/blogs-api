const { BlogPost } = require('../../models');
const { validToken } = require('../../TokenValidation/validToken');
const { validTitle,
  validIdCategory,
  validContent, 
  } = require('../../middlewares/errorsBlogPost');

module.exports = async ({ title, categoryIds, content }, token) => {
  const Token = await validToken(token);

  const { id: userId } = Token;

  if ('message' in Token) return Token;

  const titleValid = validTitle(title);

  if ('message' in titleValid) return titleValid;

  const contentValid = validContent(content);

  if ('message' in contentValid) return contentValid;

  const categoryIdsValid = await validIdCategory(categoryIds);

  if ('message' in categoryIdsValid) return categoryIdsValid;

  const blogpost = await BlogPost.create({ title, categoryIds, content, userId });

  return blogpost;
};