const restify = require('restify');
const Router = require("restify-router").Router;
const router = new Router();
const DataBase = require("./config/db").DataBase;
const rjwt = require('restify-jwt-community');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(rjwt({ secret: "my-secret-key" }).unless({
    path: ['/v1/authenticate']
}));
server.use(function (req, res, next) {
    if (req.url === '/v1/authenticate') {
        return next();
    }

    let authorization = req.header('authorization').split(" ");
    try {
        var decoded = jwt.verify(authorization[1], 'my-secret-key');
        return next();
    } catch (err) {
        res.send(401, { message: 'Not authorized' });
        return next();
    }
});

server.get('/api/status', function (req, res) {
    res.send(200, "Api is alive!!!!!");
});

router.add('', require('./routes'));

router.applyRoutes(server);
server.listen(8080, async function () {
    new DataBase(process.env.DBNAME).connet();
    console.log("server running on port: ", 8080);
})