const { Model, DataTypes, Sequelize} = require('sequelize');

const { USER_TABLE } = require('./user.model')

const TRADER_TABLE = 'traders';

const TraderSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Trader extends Model {

    static associate(models) {
        this.belongsTo(models.User, {as: 'user'});
        this.hasMany(models.Trade, {
            as: 'trades',
            foreignKey: 'traderId'
        })
    }

    static config(sequelize) {
        return {
        sequelize,
        tableName: TRADER_TABLE,
        modelName: 'Trader',
        timestamps: false
        }
    }
}

module.exports = { TRADER_TABLE, TraderSchema, Trader};
