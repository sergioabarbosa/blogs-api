const { User } = require('../../models');
const userService = require('../../services/user/create');
const { newToken } = require('../../TokenValidation/validToken');

module.exports = async (req, res, _next) => {
    try {
    const { displayName, email, password, image } = req.body;

    const service = await userService({ displayName, email, password }); 

    if ('message' in service) {
      return res.status(service.code).json({ message: service.message });
    }

    const { dataValues } = await User.create({ displayName, email, password, image });

    const token = newToken(dataValues);

    return res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).end();
  }
};