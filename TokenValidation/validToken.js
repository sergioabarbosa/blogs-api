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
  let verifyToken;
  if (!token) return { code: 401, message: 'Token not found' };
  try {
    verifyToken = jwt.verify(token, secret);
  } catch (err) {
    return { code: 401, message: 'Expired or invalid token' };
  }
  
  const dataToken = verifyToken.data;
  
  return dataToken;
};

module.exports = {
  newToken,
  validToken,
};