const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
    findUsers: (filterObject) => User.find(filterObject),

    findUsersById: (userId) => {
        (
            User.findById(userId)
        );
    },

    createUser: (userObject) => User.create(userObject),

    deleteUser: (userId) => User.deleteOne(userId)

};
