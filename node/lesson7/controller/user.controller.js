const { emailActionsEnum } = require('../constan');
const { emailService, userService } = require('../service');
const errorCode = require('../constan/errorCode.enum');
const { passwordHasher } = require('../helpers');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers(req.query);
            res.json(users);
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        const { userId } = req.params;

        const user = await userService.findUsersById(userId);
        res.json(user);
    },

    createUser: async (req, res) => {
        try {
            const { password, email, name } = req.body;
            const hashPassword = await passwordHasher.hash(password);
            await userService.createUser({ ...req.body, password: hashPassword });
            await emailService.sendMail(email, emailActionsEnum.WELCOME, { userName: name });
            res.status(201).json('user is created');
        } catch (e) {
            res.json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { UserId } = req.params;
            await userService.deleteUser(UserId);

            res.status(200).json('User is deleted');
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },
};
