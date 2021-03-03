const Joi = require('joi');

const { constants, regexpEnum } = require('../../constan');

const girlSubScheme = Joi.array().items(
    Joi.object({
        name: Joi.string().alphanum().max(20)
    })
);

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .allow('X Æ A-Xii'),
    email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required(),
    car: Joi.boolean(),
    yearOfBorn: Joi.number().integer().min(constants.CURRENT_YEAR - 100).max(constants.CURRENT_YEAR),
    girls: girlSubScheme.optional().when('car', { is: true, then: Joi.required() })
});
