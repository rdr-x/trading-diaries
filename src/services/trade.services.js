//header files
const boom = require('@hapi/boom');
// const faker = require('faker');
const { models } = require('../../libs/sequelize');


// plantilla de servicios para productos
class TradeService {
    constructor() {
    }

    async create(data) {
    const newTrade = await models.Trade.create(data);
    return newTrade;
    }

    async find() {
    const answer = await models.Trade.findAll({
        include: ['trader']
    });
    return answer;
    }

    async findOne(id) {
        const trade = await models.Trade.findByPk(id);
        if (!trade) {
            throw boom.notFound('trade not found');
        }
        return trade;
    }

    async update(id, change) {
        const trade = await this.findOne(id);
        const answer = await trade.update(change);
        return answer;
    }

    async delete(id) {
        const trade = await this.findOne(id);
        await trade.destroy(trade);
        return { message: "deleted", id };
    }
}


//exportar servicios
module.exports = TradeService;


