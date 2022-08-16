const express = require('express');
const { Mash } = require('../models');
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

router.post('/add', async (req, res, next) => {
    const { master, slave, portion } = req.body;

    try {
        const exMash = await Mash.findOne({ where: { slave } });
        if (exMash) {
            return res.redirect('/add?error=exist');
        }
        await Mash.create({
            master,
            slave,
            portion,
        });
        return res.redirect('/mash');
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
