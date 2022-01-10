const getUserService = require('../../services/user/getUsers');

module.exports = async (req, res, next) => {
  try {
    const autentication = req.headers.authorization;

    const getResponse = await getUserService(autentication);

    if ('message' in getResponse) {
      return res.status(getResponse.code).json({ message: getResponse.message });
    }

    return res.status(200).json(getResponse);
  } catch (err) {
    next(err);
  }
}; 