const User = require('../dataBase/models/User');

module.exports = {
    findUsers: () => User.find,

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
