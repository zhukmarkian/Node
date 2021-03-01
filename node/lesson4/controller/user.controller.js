const userService=require('../service/user.service')

module.exports= {
    getAllUsers:async (req, res) => {
        try {
            const users =await userService.findUsers();
            res.json(users)
        } catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message)
        }

    },

    getSingleUser: async (req, res) => {
        const {userId} = req.params;

        const user = await userService.findUsersById(userId)
        res.json(user)
    },

    getUserEmail:async (req, res) => {
        try {
            const {email} = req.params;
            const user = await userService.findUsersByEmail(email);

            res.status(200).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserName:async (req, res) => {
        try {
            const {name} = req.params;
            const user =await userService.findUsersByName(name);

            res.status(200).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
        await userService.createUser(req.body);
            res.status(201).json('users is created');
        } catch (e) {
            res.json(e.message)
        }
    },
    deleteUser: async (req,res)=>{
        try {
            const { UserId } = req.params;
       await  userService.deleteUser(UserId);

            res.status(200).json('User is deleted');
        }
        catch (e) {
            res.status(errorCode.BAD_REQUEST).json(e.message);
        }
    },
}
