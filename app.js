const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize, Spoon } = require('./models');

const app = express();
//app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS  
//app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true,
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('success to connect db');
    })
    .catch((err) => {
        console.error(err);
    })

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', async (req, res, next) => {
    //res.send('Hello, Express');
    //res.sendFile(path.join(__dirname, 'views/index2.html'));

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

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});