const express = require('express');
const { Spoon } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    //res.send('Hello, Express');
    //res.sendFile(path.join(__dirname, 'views/index2.html'));

    try {
        const spoons = await Spoon.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('new_temp', {
            title: 'new_wedge',
            spoonValues: spoons,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
