const { Model, DataTypes, Sequelize } = require('sequelize');
const { TRADER_TABLE } = require('./trader.model');
const { CATEGORY_TABLE } = require('./category.model');

const TRADE_TABLE = 'trades';

const TradeSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
		unique: true,
	},
	title: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	invesment: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	price: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	risk: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	target: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	description: {
		allowNull: false,
		type: DataTypes.TEXT,
	},
	traderId: {
		field: 'trader_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: TRADER_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'create_at',
		defaultValue: Sequelize.NOW,
	},
	categoryId: {
		field: 'category_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: CATEGORY_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	total: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
};

class Trade extends Model {
	static associate(models) {
		this.belongsTo(models.Trader, { as: 'trader' });
		this.belongsTo(models.Category, { as: 'category' });
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: TRADE_TABLE,
			modelName: 'Trade',
			timestamps: false,
		};
	}
}

module.exports = { TRADE_TABLE, TradeSchema, Trade };
