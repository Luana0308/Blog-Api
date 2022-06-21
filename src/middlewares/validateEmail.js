const { messageErrorEmailInvalid } = require('../utils/messages');

const validateEmail = (req, res, next) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email } = req.body;

    if (!regexEmail.test(email)) {
         throw messageErrorEmailInvalid;
    }
    next();
};

module.exports = {
    validateEmail,
};