const { User, UserSchema } = require('./user.model');
const { Trader, TraderSchema } = require('./trader.model');
const { Trade, TradeSchema} = require('./trade.model');
const { Category, CategorySchema } = require('./category.model');


function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Trader.init(TraderSchema, Trader.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Trade.init(TradeSchema, Trade.config(sequelize));

    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Trader.associate(sequelize.models);
    Trade.associate(sequelize.models);
}

module.exports = { setupModels };
