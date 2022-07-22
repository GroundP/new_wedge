const Sequelize = require('sequelize');
const Spoon = require('./spoon');
const Mash = require('./mash');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Spoon = Spoon;
db.Mash = Mash;

Spoon.init(sequelize);
Mash.init(sequelize);

module.exports = db;