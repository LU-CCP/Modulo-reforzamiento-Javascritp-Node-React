const restify = require('restify');

const server = restify.createServer();

server.listen(8080, function () {
    console.log("server running on port: ", 8080);
})