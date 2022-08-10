const express = require('express');
const { Instrument, Symbol } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const instruments = await Instrument.findAll({
            include: [{
                model: Symbol,
            }]
        });

        const symbols = await Symbol.findAll({
            attributes: ['id', 'broker_symbol'],
        });

        res.render('instrument', {
            title: 'new_wedge',
            instrumentValues: instruments,
            symbolValues: symbols,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/add', async (req, res, next) => {
    const { symbolId, instrumentName, priceMarkup, orderMarkup, minVolume,
        maxSpread, minSpread } = req.body;
    console.log(req.body);

    try {
        const exInstrument = await Instrument.findOne({ where: { instrument: instrumentName } });
        if (exInstrument) {
            return res.redirect('/add?error=exist');
        }
        await Instrument.create({
            instrument: instrumentName,
            price_markup_point: priceMarkup,
            order_markup_point: orderMarkup,
            min_volume: minVolume,
            max_spread: maxSpread,
            min_spread: minSpread,
            SymbolId: symbolId,
        });

        return res.redirect('/instrument');

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
