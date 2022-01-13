const getPostService = require('../../services/blogPosts/getBlogPost');

module.exports = async (req, res, next) => {
  try {
    const autentication = req.headers.authorization;

    const service = await getPostService(autentication);

    if ('message' in service) {
      return res.status(service.code).json({ message: service.message });
    }

    return res.status(200).json(service);
  } catch (err) {
    next(err);
  }
};