const express = require('express');
const { VolimeLimit } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const volumeLimits = await VolimeLimit.findAll({
            //order: [['createdAt', 'DESC']],
        });
        res.render('volume_limit', {
            title: 'new_wedge',
            volumeLimitValues: volumeLimits,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/add', async (req, res, next) => {
    const { category, target_list, volume_limit } = req.body;
    try {
        await VolimeLimit.create({
            category,
            target_list,
            volume_limit,
        });
        return res.redirect('/volume_limit');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

module.exports = router;
