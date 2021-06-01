const express = require('express')
const hbs = require('hbs');


const app = express()

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {    // Esta función es un controlador

    // La idea de handlebars es utilizar el patrón mvc (model, view, controller)
    res.render('home', {

        nombre: 'Cristian Morales',
        titulo: 'Aprendiendo node'

    }); // Renderiza la vista; ahora se puede reutilizar bloques de código
});

app.get('/no-sidebar', (req, res) => {
    res.render( 'no-sidebar', {
        nombre: 'Cristian Morales',
        titulo: 'Aprendiendo node'
    });
});

app.get('/left-sidebar', (req, res) => {
    res.render( 'left-sidebar', {
        nombre: 'Cristian Morales',
        titulo: 'Aprendiendo node'
    });
});

app.get('/right-sidebar', (req, res) => {
    res.render( 'right-sidebar', {
        nombre: 'Cristian Morales',
        titulo: 'Aprendiendo node'
    });
});

app.get('*', (req, res) => {
    res.render( '404', {
        nombre: 'Cristian Morales',
        titulo: 'Aprendiendo node'
    });
});







// Se utilizan los sendfile para que en el header de el navegador no sea visible la extension .html
app.get('/no-sidebar', (req, res) => {
    res.sendFile( __dirname + '/public/no-sidebar.html');
});

app.get('/left-sidebar', (req, res) => {
    res.sendFile( __dirname + '/public/left-sidebar.html');
});

app.get('/right-sidebar', (req, res) => {
    res.sendFile( __dirname + '/public/right-sidebar.html');
});

// Cualquier otra página a la que se intente acceder y no exista; devolver error
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');  // Se tiene que colocar el path absoluto por lo cual se usa __dirname
                                                    // que contiene el path del lugar donde se ejecuta la aplicacion
});
 
app.listen(8080);




