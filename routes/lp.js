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
    const selectedKeys = Object.keys(req.body);

    //res.send("<script>if(!confirm('OK?')){ history.back(); }</script>");

    try {

        for (const key of selectedKeys) {
            console.log(key);
            const deleteId = key.substring(9);
            console.log(deleteId);
            const exLp = await Lp.findOne({ where: { id: deleteId } });
            if (!exLp) {
                return res.redirect('/delete?error=nonexist');
            }

            await Lp.destroy({
                where: {
                    id: deleteId,
                }
            });
        }

        return res.redirect('/lp');
    } catch (err) {
        console.error(err);
        next(err);
    }

});

module.exports = router;
