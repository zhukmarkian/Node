const errorCodes = require('../constan/errorCode.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
    checkIsIdValid: (req, res, next) => {
        try {
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isUserValid: (req, res, next) => {
        try {
            const {
                name, password, email, preferLanguage = 'en'
            } = req.body;

            if (!name || !password) {
                throw new Error(errorMessages.NOT_FOUND[preferLanguage]);
            }

            if (password.length < 6) {
                throw new Error(errorMessages.TOO_WEAK_PASSWORD[preferLanguage]);
            }

            if (!email.includes('@')) {
                throw new Error(errorMessages.NOT_FOUND[preferLanguage]);
            }

            if (name.length < 2) {
                throw new Error(errorMessages.NOT_USERNAME[preferLanguage]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
};
