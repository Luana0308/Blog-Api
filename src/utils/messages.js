const messageErrorMissingFields = { status: 400, message: 'Some required fields are missing' };
const messageErrorInvalidFields = { status: 400, message: 'Invalid fields' };
const messageErrorUserExist = { status: 409, message: 'User already registered' };
const messageErrorNameFail = { status: 400, 
    message: '"displayName" length must be at least 8 characters long' };

const messageErrorEmailInvalid = { status: 400, message: '"email" must be a valid email' };
const messageErrorPassword = { status: 400, 
    message: '"password" length must be at least 6 characters long' };

const messageErrorToken = { status: 401, message: 'Token not found' };
const messageErrorTokenInvalid = { status: 401, message: 'Expired or invalid token' };
const messageErrorUserNotExist = { status: 404, message: 'User does not exist' };
const messageErrorCategory = { status: 400, message: '"name" is required' };

module.exports = {
    messageErrorMissingFields,
    messageErrorInvalidFields,
    messageErrorUserExist,
    messageErrorNameFail,
    messageErrorEmailInvalid,
    messageErrorPassword,
    messageErrorToken,
    messageErrorTokenInvalid,
    messageErrorUserNotExist,
    messageErrorCategory,
};