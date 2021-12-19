//header file
const Joi = require('joi');
//validators
const id = Joi.string();
const description = Joi.string();
const title = Joi.string();
const traderId = Joi.number().integer();
const tradeId = Joi.number().integer();
const price = Joi.number().integer().min(1);
const target = Joi.number().integer().min(1);
const risk = Joi.number().integer().min(1);
const invesment = Joi.number().integer().min(1);


const  createTradeSchema = Joi.object({
    traderId: traderId.required(),
    title: title.required(),
    description: description.required(),
    tradeId: tradeId.required(),
    price: price.required(),
    target: target.required(),
    risk: risk.required(),
    invesment: invesment.required()
});

const  getTradeSchema = Joi.object({
    id: id.required()
});

const updateTradeSchema = Joi.object({
    title: title,
    description: description,
    price: price,
    target: target,
    risk: risk,
})


module.exports = {
    createTradeSchema,
    getTradeSchema,
    updateTradeSchema
};
