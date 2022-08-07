const Sequelize = require('sequelize');
const Spoon = require('./spoon');
const Mash = require('./mash');
const Lp = require('./lp');
const Symbol = require('./symbol');
const Instrument = require('./instrument');
const VolimeLimit = require('./volume_limit');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Spoon = Spoon;
db.Mash = Mash;
db.Lp = Lp;
db.Symbol = Symbol;
db.Instrument = Instrument;
db.VolimeLimit = VolimeLimit;

Spoon.init(sequelize);
Mash.init(sequelize);
Lp.init(sequelize);
Symbol.init(sequelize);
Instrument.init(sequelize);
VolimeLimit.init(sequelize);

module.exports = db;