const getCategories = require('../../services/categories/getCategories');

module.exports = async (req, res, next) => {
  try {
    const autentication = req.headers.authorization;

    const responseCategorie = await getCategories(autentication);

    if ('message' in responseCategorie) {
      return res.status(responseCategorie.code).json({ message: responseCategorie.message });
    }

    return res.status(200).json(responseCategorie);
  } catch (err) {
    next(err);
  }
};