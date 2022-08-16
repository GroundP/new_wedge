const Sequelize = require('sequelize');

module.exports = class Mash extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            master: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            slave: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            portion: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Mash',
            tableName: 'mash',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}