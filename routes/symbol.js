const express = require('express');
const { Symbol } = require('../models');
const router = express.Router();


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

module.exports = router;
