const http = require('http');

http.createServer( ( request, response ) => {

    // response.writeHead(200, { 'Content-Type': 'text/plain' });  // Indica que devuelve un objeto de texto plano

    // response.writeHead(200, { 'Content-Type': 'application/json' });  // Indica que devuelve un objeto de json
    
    // const persona = {
    //     id: 1,
    //     nombre: 'Cristian'
    // }
    // response.write( JSON.stringify( persona ) );  // Para que el objeto sea serializable al write, se puede usar JSON


    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv' });  // Indica que devuelve un objeto de csv

    response.write( 'id, nombre\n' );
    response.write( '1, Cristian\n' );
    response.write( '2, Aurora\n' );
    response.write( '3, Jenifer\n' );

    response.end();                     // Para que node sepa que ya se terminó de escribir la respuesta del server

})
.listen( 8080 )     // Levantar aplicación en el puerto 8080

console.log('Escuchando el puerto', 8080);

