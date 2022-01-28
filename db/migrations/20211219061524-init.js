'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');
const { CATEGORY_TABLE, CategorySchema} = require('../models/category.model');
const { TRADER_TABLE, TraderSchema } = require('../models/trader.model');
const { TRADE_TABLE, TradeSchema } = require('../models/trade.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(TRADER_TABLE, TraderSchema);
    await queryInterface.createTable(TRADE_TABLE, TradeSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(TRADER_TABLE);
    await queryInterface.dropTable(TRADE_TABLE);
  }
};
