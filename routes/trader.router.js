const express = require('express');
const TraderService = require('../src/services/trader.services');
//middlewares header files
const validatorHandler = require('../middlewares/validator.handler');
const { createTraderSchema,
    updateTraderSchema,
    getTraderSchema } = require('../schemas/trade.schema');
//router
const router = express.Router();
//servicios
const service = new TraderService();

router.get('/', async (req, res, next) => {
    try {
        const trader = await service.find();
        res.json(trader);
        console.log("trader sent");
    } catch (error) {
        next(error);
    }
});


router.get('/:id',
    validatorHandler(getTraderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const trader = await service.findOne(id);
            res.status(200).json(trader);
            console.log('trader ' + order.id + ' sent');
        } catch (error) {
            next(error);
        }
    }
);

//POST
router.post('/',
    validatorHandler(createTraderSchema,'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newTrader = await service.create(body);
            res.status(201).json(newTrader);
        } catch (error) {
            next(error);
        }
    }
);

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTrader = await service.delete(id);
    res.json(deletedTrader);
});

//exportar modulo
module.exports = router;