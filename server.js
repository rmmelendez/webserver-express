const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine (similar a plantillas de BLADE)
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'maurIcio mElÉndeZ'
    });

});
app.get('/about', (req, res) => {

    res.render('about');

});


/*
app.get('/', (req, res) => {
    //res.send('Hola mundo')
    let salida = {
        nombre: 'Mauricio',
        edad: 50,
        url: req.url
    };

    res.send(salida);
});
*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${ port }`);
});