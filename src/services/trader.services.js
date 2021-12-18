//header files
const boom = require('@hapi/boom');
// const faker = require('faker');
const { models } = require('../../libs/sequelize');


// plantilla de servicios para productos
class TraderService {
    constructor() {
    }
    async create(data) {
        const newTrader = await models.Trader.create(data, {
        include: ['user']
    });
    return newTrader;
    }

    async find() {
        const answer = await models.Trader.findAll({
            include: ['user']
        });
        return answer;
    }

    async findOne(id) {
        const trader = await models.Trader.findByPk(id);
        if (!trader) {
            throw boom.notFound('trader not found');
        }
        return trader;
    }

    async update(id, change) {
        const trader = await this.findOne(id);
        const answer = await trader.update(change);
        return answer;
    }

    async delete(id) {
        const trader = await this.findOne(id);
        await trader.destroy(trader);
        return { message: "deleted", id };
    }
}


//exportar servicios
module.exports = TraderService;
