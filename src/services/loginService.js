const { User } = require('../database/models');

const authenticationLogin = async ({ email, password }) => {
    if (!email || !password) {
        return { message: 'Some required fields are missing' };
    }

    const userLogin = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email, password },
    });

    if (!userLogin) {
        return { message: 'Invalid fields' };
    }

    // // Gerar o token
    // const token = generateJWTToken(student.dataValues);
    // return { token };
};

module.exports = {
    authenticationLogin,
};