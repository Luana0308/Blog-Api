const { User } = require('../database/models');
const { messageErrorUserExist } = require('../utils/messages');
const { generateJWTToken } = require('../utils/validateToken');

const createUser = async ({ id, displayName, email, password, image }) => {
    const userExist = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email },
    });

    if (userExist) {
        throw messageErrorUserExist;
    }

    const newUser = await User.create({ id, displayName, email, password, image });

    const token = generateJWTToken(newUser.dataValues);
    return { token };
};

module.exports = {
    createUser,
};