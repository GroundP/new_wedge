const express = require('express');
const { Instrument } = require('../models');
const router = express.Router();

// const edit = GLOBAL.document.querySelector(".edit_symbol");

// edit.addEventListener("click", (e) => {
//     alert("hello" + e);
// });

// $('.edit_symbol').off().click(function (e) {
//     return oSelf.editSymbol($(e.target));
// });

router.get('/', async (req, res, next) => {
    try {
        const instruments = await Instrument.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('instrument', {
            title: 'new_wedge',
            instrumentValues: instruments,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/add', async (req, res, next) => {
    const { BrokerSymbol, PriceMarku22p, InstrumentName, PriceMarkup, OrderMarkup, MinVolume,
        MaxSpread, MinSpread } = req.body;

    const instrument = InstrumentName;
    const price_markup_point = PriceMarkup;
    const order_markup_point = OrderMarkup;
    const max_spread = MaxSpread;
    const min_spread = MinSpread;
    const updated_at = "123";
    console.log({
        BrokerSymbol, PriceMarku22p, InstrumentName, PriceMarkup, OrderMarkup, MinVolume,
        MaxSpread, MinSpread
    });
    const cd = 1, symbol_cd = 1, symbol_config_id = 1, digits = 1;  //TODO
    try {
        const exInstrument = await Instrument.findOne({ where: { cd } });
        if (exInstrument) {
            return res.redirect('/add?error=exist');
        }
        await Instrument.create({
            cd,
            symbol_cd,
            symbol_config_id,
            instrument,
            price_markup_point,
            order_markup_point,
            updated_at,
            MinVolume,
            max_spread,
            min_spread,
            digits,
        });

        return res.redirect('/instrument');

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
