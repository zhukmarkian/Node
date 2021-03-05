const User = require('../dataBase/models/User');
const errorCodes = require('../constan/errorCode.enum');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const allCars = await User.findAllCars();
            res.json(allCars);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getCarsById: async (req, res) => {
        try {
            const carId = req.params.id;
            const finderCar = await User.findCarByID(carId);

            res.json(finderCar);
        } catch (e) {
            res.json(e.message);
        }
    },

    createCars: async (req, res) => {
        try {
            await User.createCar(req.body);

            res.json('Car Created');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e);
        }
    },
};
