const categoryService = require('../../services/categories/categories');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;

    const autentication = req.headers.authorization;

    const response = await categoryService({ name }, autentication);

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message });
    }

    return res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};