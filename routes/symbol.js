const express = require('express');
const { Symbol } = require('../models');
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
        const symbols = await Symbol.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('symbol', {
            title: 'new_wedge',
            symbolValues: symbols,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/add', async (req, res, next) => {
    const { lp_symbol, lp, contract_size, multiplier, broker_symbol, digits } = req.body;
    try {
        const exSymbol = await Symbol.findOne({ where: { lp_symbol } });
        if (exSymbol) {
            return res.redirect('/add?error=exist');
        }
        await Symbol.create({
            lp_symbol,
            lp,
            contract_size,
            multiplier,
            broker_symbol,
            digits
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
