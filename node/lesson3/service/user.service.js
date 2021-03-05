const fs = require('fs');
const DB = require('../dataBase/users');

const { readFile } = fs;

module.exports = {
    findUsers: () => DB,

    findUsersById: (userId) => DB[userId],
    createUser: (userId) => DB.push[userId],

    findUsersByEmail: (email) => DB.find((user) => user.email === email),
    findUsersByName: (name) => DB.find((user) => user.name === name),
    deleteUser: (userId) => {
        const users = readFile(DB);
        DB.splice(userId, 1);
        users.writeFile(DB);
    }
};
