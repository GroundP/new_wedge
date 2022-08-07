const express = require('express');
const { Lp } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const lps = await Lp.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('lp', {
            title: 'new_wedge',
            lpValues: lps,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/add', async (req, res, next) => {
    const { lp_name, description, csv_provide } = req.body;
    try {
        await Lp.create({
            lp_name,
            description,
            csv_provide,
        });
        return res.redirect('/lp');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
