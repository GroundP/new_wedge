const Sequelize = require('sequelize');

module.exports = class Spoon extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            cd: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
            },
            mkd_log_level: {
                type: Sequelize.STRING(225),
                allowNull: false,
            },
            mkd_log_prices: {
                type: Sequelize.STRING(225),
                allowNull: false,
            },
            mkd_spread_count: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            mkd_spread_ratio: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            mkd_spread_interval: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            mkd_max_spread_factor: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            mkd_min_spread_factor: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            service_host: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            service_port: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Spoon',
            tableName: 'spoon',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}