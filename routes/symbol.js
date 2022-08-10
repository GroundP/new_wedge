const express = require('express');
const { Symbol, Lp } = require('../models');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const symbols = await Symbol.findAll({
            include: [{
                model: Lp,
            }]
        });

        const lps = await Lp.findAll({});

        res.render('symbol', {
            title: 'new_wedge',
            symbolValues: symbols,
            lpValues: lps,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/add', async (req, res, next) => {
    console.log(req.body);
    const { lpSymbol, contractSize, multiplier, brokerSymbol, digits, lpId } = req.body;
    try {
        const exSymbol = await Symbol.findOne({ where: { lp_symbol: lpSymbol } });
        if (exSymbol) {
            return res.redirect('/add?error=exist');
        }
        await Symbol.create({
            lp_symbol: lpSymbol,
            contract_size: contractSize,
            multiplier,
            broker_symbol: brokerSymbol,
            digits,
            LpId: lpId,
        });
        return res.redirect('/symbol');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
