const { User } = require('../../models');
const loginService = require('../../services/login/login');
const { newToken } = require('../../TokenValidation/validToken');

module.exports = async (req, res, _next) => {
  try {
    const { email, password } = req.body;

    const service = await loginService({ email, password });

    if ('message' in service) {
      return res.status(service.code).json({ message: service.message });
    }

    const { dataValues } = await User.findOne({ where: { email } });

    const token = newToken(dataValues);

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).end();
  }
};