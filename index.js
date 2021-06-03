require('dotenv').config();
const express = require('express');

const app = express()
const port = process.env.PORT;

// Servir contenido estático
app.use( express.static('public') );

// Cualquier otra página a la que se intente acceder y no exista; devolver a index.html
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html');  // Se tiene que colocar el path absoluto por lo cual se usa __dirname
                                                      // que contiene el path del lugar donde se ejecuta la aplicacion
});
 
app.listen(port, () => {
    console.log(`Escuchando en: http://localhost:${port}`);
});




