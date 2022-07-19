const express = require('express');
const {Spoon} = require('../models');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: Spoon,
                attributes: ['cd', 'mkd_log_level'],
            },
            order: [['createdAt', 'DESC']],
        });
        res.render('main', {
            title: 'NewWedge',
            spoonconf: spoon,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
