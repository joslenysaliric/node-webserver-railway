require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;
//handlebar:
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //PARA USAR PARCIALES
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req,res) => {
     res.render('home', { // estos son los argumentos
      nombre: 'Joslenys Freites',
      titulo: 'Curso de Node'
     });
})
app.get('/elements', (req, res) => {
    res.render('elements', { // estos son los argumentos
        nombre: 'Joslenys Freites',
        titulo: 'Curso de Node'
       });
});
app.get('/generic', (req, res) => {
    res.render('generic', { // estos son los argumentos
        nombre: 'Joslenys Freites',
        titulo: 'Curso de Node'
       });
});
app.get('*', (req, res)=> {
    res.sendFile(__dirname +'/public/404.html');
})
app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

