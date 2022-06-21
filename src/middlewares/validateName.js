const { messageErrorNameFail } = require('../utils/messages');

const validateName = (req, res, next) => {
    const { displayName } = req.body;

    if (displayName.length < 8) {
         throw messageErrorNameFail;
    //    return res.status(400)
    //    .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

module.exports = {
    validateName,
};