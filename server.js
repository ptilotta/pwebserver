var express = require('express');
var app = express();
var hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { nombre: 'fernando' });
})
app.get('/about', (req, res) => {
    res.render('about', { nombre: 'fernando' });
})
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})