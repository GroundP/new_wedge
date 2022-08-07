const Sequelize = require('sequelize');

module.exports = class VolumeLimit extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            lp_name: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING(225),
                allowNull: false,
            },
            csv_provide: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Lp',
            tableName: 'lps',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}