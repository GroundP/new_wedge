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

router.delete('/', async (req, res, next) => {
    console.log(req.body);
    const { id, lp_name, description, csv_provide } = req.body;

    try {
        const exLp = await Lp.findOne({ where: { id } });
        if (!exLp) {
            return res.redirect('/delete?error=nonexist');
        }

        await Lp.delete({
            id,
        });
        return res.redirect('/lp');
    } catch (err) {
        console.error(err);
        next(err);
    }

});

module.exports = router;
