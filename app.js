const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS  
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'html');
// nunjucks.configure('views', {
//     express: app,
//     watch: true,
// });

app.get('/', (req, res) => {
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});