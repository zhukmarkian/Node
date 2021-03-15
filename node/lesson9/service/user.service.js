const User = require('../dataBase/models/User');
require('../dataBase/models/Car');
// priceGte=3000&price_lte=7000&category=car;lg;xxx&color=red&limit=20&page=7
module.exports = {
    findUsers: async (query = {}) => {
        const {
            limit = 20, page = 1, sortBy = 'createdAt', order = 'asc', ...filters
        } = query;
        const skip = (page - 1) * limit;
        const keys = Object.keys(filters);
        const filterObject = {};
        const orderBy = order === 'asc' ? -1 : 1;

        const sort = { [sortBy]: orderBy };
        // priceGte=3000&price_lte=7000&category=car;lg;xxx&color=red
        keys.forEach((key) => {
            switch (key) {
                case 'priceGte':
                    filterObject.price = { ...filterObject.price, $gte: +filters.priceGte };
                    break;

                case 'price_lte':
                    filterObject.price = { ...filterObject.price, $lte: +filters.price_lte };
                    break;

                case 'category':
                    const categories = filters.category.split(';');
                    filterObject.category = { $in: categories };
                    break;

                default:
                    filterObject[key] = filters[key];
            }
        });
        const users = await User.find(filterObject).limit(+limit).skip(skip).sort(sort);
        const count = await User.countDocuments(filterObject);

        return {
            data: users,
            page,
            limit,
            count,
            pages: Math.ceil(count / limit)
        };
    },
    findUsersById: (userId) => {
        (
            User.findById(userId)
        );
    },
    createUser: (userObject) => User.create(userObject),
    deleteUser: (userId) => User.deleteOne(userId),

    updateUserById: (userId, updateObject) => User.updateOne({ _id: userId }, { $set: updateObject })
};
