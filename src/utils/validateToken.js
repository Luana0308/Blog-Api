require('dotenv').config();
const jwt = require('jsonwebtoken');

const { messageErrorToken, messageErrorTokenInvalid } = require('./messages');

const SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '60m',
    algorithm: 'HS256',
};

const generateJWTToken = (payload) => 
    jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = (token) => {
    if (!token) {
        throw messageErrorToken;
    }
    try {
        const introspection = jwt.verify(token, SECRET, jwtConfig);
        return introspection;
    } catch (erro) {
        throw messageErrorTokenInvalid;
    }
};
module.exports = {
    generateJWTToken,
    authenticateToken,
};