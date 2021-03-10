module.exports = {
    MONGO_URL: 'mongodb://localhost:27017/sep-2020',
    JWT_SECRET: process.env.JWT_SECRET || 'JWT_ACCESS',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'JWT_REFRESH',
    PORT: 5000,

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'testmail@gmail.com',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '111111'
};
