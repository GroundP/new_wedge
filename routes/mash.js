const express = require('express');
const {Mash} = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    //res.send('Hello, Express');
    //res.sendFile(path.join(__dirname, 'views/index2.html'));

    try {
        const mashs = await Mash.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('mash', {
            title: 'new_wedge',
            mashValues: mashs,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
