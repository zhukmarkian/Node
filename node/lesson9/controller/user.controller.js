const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs-extra').promises;
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
            const { body: { password, email }, avatar } = req;
            const hashPassword = await passwordHasher.hash(password);

            const user = await userService.createUser({ ...req.body, password: hashPassword });

            if (avatar) {
                const pathWithoutStatic = path.join('user', `${user._id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'static', pathWithoutStatic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid()}.${fileExtension}`;
                const finalPhotoPath = path.join(photoDir, photoName);

                console.log('***************************************8');
                console.log(finalPhotoPath);
                console.log('***************************************8');

                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(finalPhotoPath);
            }
            await emailService.sendMail(email, emailActionsEnum.WELCOME, { userName: email });
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
