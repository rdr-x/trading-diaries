const express = require('express');
const TradeService = require('../src/services/trade.services');
//middlewares header files
const validatorHandler = require('../middlewares/validator.handler');
const { createTradeSchema,
    getTradeSchema,
    updateTradeSchema } = require('../schemas/trade.schema');
//router
const router = express.Router();
//servicios
const service = new TradeService();

router.get('/', async (req, res, next) => {
    try {
        const trade = await service.find();
        res.json(trade);
        console.log("trade sent");
    } catch (error) {
        next(error);
    }
});


router.get('/:id',
    validatorHandler(getTradeSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const trade = await service.findOne(id);
            res.status(200).json(trade);
            console.log('trade ' + order.id + ' sent');
        } catch (error) {
            next(error);
        }
    }
);

//POST
router.post('/',
  validatorHandler(createTradeSchema,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTrade = await service.create(body);
      res.status(201).json(newTrade);
    } catch (error) {
      next(error);
    }
  }
);

//delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedTrade = await service.delete(id);
  res.json(deletedTrade);
});

//exportar modulo
module.exports = router;