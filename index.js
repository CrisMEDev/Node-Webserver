const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Home page'); 
});

app.get('/hola-mundo', (req, res) => {
    res.send('hola-mundo page');
});

// Cualquier otra página a la que se intente acceder y no exista; devolver error
app.get('*', (req, res) => {
    res.send('404 - Page not found');
});
 
app.listen(8080);

