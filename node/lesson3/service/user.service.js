const DB=require('../dataBase/users')
const fs = require('fs');

const readFile = (fs.readFile);
const writeFile = (fs.writeFile);

module.exports={
    findUsers: ()=>{
       return DB
    },

    findUsersById:  (userId) => {
        return DB[userId]
    },
    createUser: (userId)=>{
     return DB.push[userId];
    },

    findUsersByEmail:(email ) => {



        return DB.find(user => user.email === email);
    },
    findUsersByName:(name ) => {



        return DB.find(user => user.name === name);
    },
    deleteUser: (userId)=>{
        const users = readFile(DB);
        DB.splice(userId, 1);
         users.writeFile(DB);
}}

