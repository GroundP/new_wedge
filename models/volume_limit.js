const Sequelize = require('sequelize');

module.exports = class VolumeLimit extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            category: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            target_list: {
                type: Sequelize.STRING(225),
                allowNull: false,
            },
            volume_limit: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'VolimeLimit',
            tableName: 'volume_limit',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}