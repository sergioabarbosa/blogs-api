const getPostByIdService = require('../../services/blogPosts/getBlogPostById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autentication = req.headers.authorization;

    const service = await getPostByIdService({ id }, autentication);

    if ('message' in service) {
      return res.status(service.code).json({ message: service.message });
    }

    return res.status(200).json(service);
  } catch (err) {
    next(err);
  }
};