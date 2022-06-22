const { messageErrorTokenInvalid } = require('../utils/messages');
const { authenticateToken } = require('../utils/validateToken');

const authToken = (req, res, next) => {
    const token = req.headers.authorization;

    const payload = authenticateToken(token);
    if (!payload) {
        throw messageErrorTokenInvalid;
    }
    res.locals.payload = payload;

    next();
};

module.exports = {
    authToken,
};