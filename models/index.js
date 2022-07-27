const Sequelize = require('sequelize');
const Spoon = require('./spoon');
const Mash = require('./mash');
const Symbol = require('./symbol');
const Instrument = require('./instrument');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Spoon = Spoon;
db.Mash = Mash;
db.Symbol = Symbol;
db.Instrument = Instrument;

Spoon.init(sequelize);
Mash.init(sequelize);
Symbol.init(sequelize);
Instrument.init(sequelize);

module.exports = db;