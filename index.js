const http = require('http');

http.createServer( ( request, response ) => {

    response.write('Hola mundo');
    response.end();                     // Para que node sepa que ya se terminó de escribir la respuesta del server

})
.listen( 8080 )     // Levantar aplicación en el puerto 8080

console.log('Escuchando el puerto', 8080);

