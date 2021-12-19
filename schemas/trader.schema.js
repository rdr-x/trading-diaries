//header file
const Joi = require('joi');
const { createUserSchema, updateUserSchema} = require('./user.schema')
//validators
const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);


const getTraderSchema = Joi.object({
    id: id.required(),
});

const createTraderSchema = Joi.object({
    name: name.required(),
    user: createUserSchema
});

const updateTraderSchema = Joi.object({
    name: name,
    user: updateUserSchema
});


module.exports = {
    createTraderSchema,
    updateTraderSchema,
    getTraderSchema
};
