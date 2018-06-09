const http = require('http');
const
    http.createServer((req, res) => {
        res.write('Hola Mundo');
        res.end;
    })
    .listen(8181);

console.log('Escuchando el puerto 8080');