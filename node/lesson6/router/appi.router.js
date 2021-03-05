const router = require('express').Router();
const authRouter = require('./auth.router');
const userRouter = require('./user.router');

router.use('/users', userRouter);
router.use('/auth', authRouter);

router.post('/', (req, res) => {
    res.json('users is created');
});
module.exports = router;
