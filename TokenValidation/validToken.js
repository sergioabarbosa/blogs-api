const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const newToken = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);

  return token;
};

const validToken = (token) => {
  try {
    const { data } = jwt.verify(token, secret);

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  newToken,
  validToken,
};