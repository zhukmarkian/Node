const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
    findUsers: (filterObject) => User.find(filterObject),

    findUsersById: (userId) => {
        (
            User.findById(userId)
        );
    },

    createUser: async (userObject) => {
        await User.create({ ...userObject, gender: 'male' });
    },

    findUsersByEmail: (email) => {
        User.find((user) => user.email === email);
    },

    findUsersByName: (name) => {
        User.find((user) => user.name === name);
    },
    deleteUser: async (userId) => {
        await User.deleteOne(userId);
    },
};
