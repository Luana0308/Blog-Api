const { User } = require('../database/models');
const { messageErrorUserExist, messageErrorUserNotExist } = require('../utils/messages');
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

const getUserId = async (id) => {
    const user = await User.findByPk(id, {
        attributes: ['id', 'displayName', 'email', 'image'],
    });

    if (!user) {
        throw messageErrorUserNotExist;
    }
    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserId,
};