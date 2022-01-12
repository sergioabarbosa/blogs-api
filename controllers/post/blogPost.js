const PostService = require('../../services/blogPosts/blogPosts');

module.exports = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const autentication = req.headers.authorization;

    const service = await PostService({ title, content, categoryIds }, autentication);

    if ('message' in service) {
      return res.status(service.code).json({ message: service.message });
    }

    return res.status(201).json(service);
  } catch (err) {
    next(err);
  }
};