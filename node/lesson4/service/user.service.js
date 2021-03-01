const User=require('../dataBase/models/User')
const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
module.exports={
    findUsers: ()=>{
        return User.find
    },

    findUsersById:  (userId) => {
        User.findById(userId)
    },
    createUser: (userObject)=>{
         User.create({...userObject,gender:'male'});
    },

    findUsersByEmail:(email ) => {



         User.find(user => user.email === email);
    },
    findUsersByName:(name ) => {



       User.find(user => user.name === name);
    },

    deleteUser: async (userId) => {


        User.splice(userId, 1);

        User.writeFile( User);
    },

};

