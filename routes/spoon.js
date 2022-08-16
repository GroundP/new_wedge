const express = require('express');
const { Spoon } = require('../models');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const spoons = await Spoon.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('spoon', {
            title: 'new_wedge',
            spoonValues: spoons,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const {
        mkdLogLevel,
        // mkd_log_level,
        mkdLogPrices,
        mkd_spread_count,
        mkd_spread_ratio,
        mkd_spread_interval,
        mkd_max_spread_factor,
        mkd_min_spread_factor,
        ord_log_level,
        ord_duration,
        ordCancel,
        service_host,
        service_port
    } = req.body;

    console.log(req.body);

    try {
        const exSpoon = await Spoon.findOne({ where: { id: 1 } });
        if (!exSpoon) {
            return res.redirect('/add?error=notexist');
        }
        await Spoon.update({
            mkd_log_level: mkdLogLevel,
            mkd_log_prices: mkdLogPrices ? true : false,
            mkd_spread_count,
            mkd_spread_ratio,
            mkd_spread_interval,
            mkd_max_spread_factor,
            mkd_min_spread_factor,
            ord_log_level,
            ord_duration,
            ord_cancel_noprice: ordCancel ? true : false,
            service_host,
            service_port
        }, { where: { id: 1 } });

        return res.redirect('/spoon');
    } catch (err) {
        console.error(err);
        next(err);
    }
})


router.get('/edit', async (req, res, next) => {
    try {
        const spoons = await Spoon.findAll({
        });

        res.render('spoon', {
            title: 'new_wedge',
            spoonValues: spoons,
            edit_flag: true,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});


module.exports = router;
