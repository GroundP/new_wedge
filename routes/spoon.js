const express = require('express');
const {Spoon} = require('../models');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const spoons = await Spoon.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('main', {
            title: 'new_wedge',
            spoonValues: spoons,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
