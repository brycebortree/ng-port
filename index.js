var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/views', express.static(__dirname + '/public/views'));

app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

console.log('listening to the smooth sounds of', (process.env.PORT || 3000));

app.listen(process.env.PORT || 3000);
