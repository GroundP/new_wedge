const Sequelize = require('sequelize');

module.exports = class Instrument extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            cd: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            symbol_cd: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            symbol_config_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            instrument: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            order_markup_point: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            price_markup_point: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            min_volume: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            max_spread: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            min_spread: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            digits: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Instrument',
            tableName: 'instruments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}