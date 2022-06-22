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

const getAllUsers = async () => {
    const users = await User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
};

module.exports = {
    createUser,
    getAllUsers,
};