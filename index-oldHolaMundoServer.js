const express = require('express')
const app = express()


// Servir contenido estático
app.use( express.static('./public') );

// Como el path anterior es el primero, se toma como el path raiz por lo cual nunca se ejecuta lo siguiente
// sin embargo, se mantiene el path a /hola-mundo
app.get('/', (req, res) => {
  res.send('Home page'); 
});

app.get('/hola-mundo', (req, res) => {
    res.send('hola-mundo page');
});

// Cualquier otra página a la que se intente acceder y no exista; devolver error
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');  // Se tiene que colocar el path absoluto por lo cual se usa __dirname
                                                    // que contiene el path del lugar donde se ejecuta la aplicacion
});
 
app.listen(8080);

