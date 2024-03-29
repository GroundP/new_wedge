const Sequelize = require('sequelize');

module.exports = class Symbol extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            lp_symbol: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            contract_size: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            multiplier: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            broker_symbol: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            digits: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Symbol',
            tableName: 'symbols',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Symbol.belongsTo(db.Lp);
        db.Symbol.hasMany(db.Instrument);
    }
}