const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'JWT_SECRET', { expiresIn: '10m' });
    const refresh_token = jwt.sign({}, 'JWT_SECRET', { expiresIn: '30d' });

    return (
        access_token,
        refresh_token
    );
};
