const router = require('express').Router();
const userRouter = require('./user.router');

router.use('/users', userRouter);

router.post('/', (req, res) => {
    res.json('users is created');
});
module.exports = router;
