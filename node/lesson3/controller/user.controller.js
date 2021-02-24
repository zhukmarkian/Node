const userService=require('../service/user.service')
const errorCode=require("../constan/errorCode.enum")
module.exports={
    getAllUsers:(req,res)=>{
        try {
            const users=userService.findUsers();
            res.json(users)
        }catch (e){
            res.status(errorCode.BAD_REQUEST).json(e.message)
        }

},
    getSingleUser:(req,res)=>{
        const {userId}=req.params;

        const user=userService.findUsersById(userId)
        res.json(user)
    },
  getUserEmail: (req, res) => {
      try {
          const { email } = req.params;
          const user =  userService.findUsersByEmail(email);

          res.status(200).json(user);
      }
      catch (e) {
          res.status(400).json(e.message);
      }
  },

    getUserName: (req, res) => {
        try {
            const { name } = req.params;
            const user =  userService.findUsersByName(name);

            res.status(200).json(user);
        }
        catch (e) {
            res.status(400).json(e.message);
        }
    },
    createUser:(req, res)=> {
        userService.createUser(req.body)

        res.status(201).json('users is created');

    },
    // deleteUser: async (req,res)=>{
    //     try {
    //         const { UserId } = req.params;
    //    await  userService.deleteUser(UserId);
    //
    //         res.status(200).json('User is deleted');
    //     }
    //     catch (e) {
    //         res.status(errorCode.BAD_REQUEST).json(e.message);
    //     }
    // },
}
