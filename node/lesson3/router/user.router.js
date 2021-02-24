const router = require('express').Router();

const userController=require('../controller/user.controller')

const userMiddleware=require('../midleware/user.midleware')


router.get('/', userController.getAllUsers);

router.get('/:userId',userMiddleware.checkIsIdValid, userController.getSingleUser);

router.post('/', userMiddleware.isUserValid, userMiddleware.isUserValid, userController.createUser);

router.delete('/:userId',userMiddleware.isUserValid, userController.deleteUser);

router.get('/findEmail/:email', userController.getUserEmail);

router.get('/findUsername/:name', userController.getUserName);

module.exports = router;
