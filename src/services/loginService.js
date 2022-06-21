const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/validateToken');
const { messageErrorMissingFields, messageErrorInvalidFields } = require('../utils/messages');

const authenticationLogin = async ({ email, password }) => {
    if (!email || !password) {
        throw messageErrorMissingFields;
    }

    const userLogin = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email, password },
    });

    if (!userLogin) {
        throw messageErrorInvalidFields;
    }

    // Gerar o token
    const token = generateJWTToken(userLogin.dataValues);
    return { token };
};

module.exports = {
    authenticationLogin,
};