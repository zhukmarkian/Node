const router = require('express').Router();

const userController = require('../controller/user.controller');

const { userMiddleware, fileMiddleware } = require('../midleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getSingleUser);
router.delete('/:userId', userController.deleteUser);
router.post('/',
    fileMiddleware.checkFileMiddleware,
    fileMiddleware.checkAvatar,
    userMiddleware.isUserValid,
    userController.createUser);

module.exports = router;
