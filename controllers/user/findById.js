const findByIdService = require('../../services/user/findById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const autentication = req.headers.authorization;

    const getResponse = await findByIdService({ id }, autentication);

    if ('message' in getResponse) {
      return res.status(getResponse.code).json({ message: getResponse.message });
    }

    return res.status(200).json(getResponse);
  } catch (err) {
    next(err);
  }
};