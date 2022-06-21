const { messageErrorPassword } = require('../utils/messages');

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6) {
         throw messageErrorPassword;
    }
    next();
};

module.exports = {
    validatePassword,
};