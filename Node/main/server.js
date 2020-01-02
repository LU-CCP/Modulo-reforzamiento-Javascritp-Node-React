const restify = require('restify');
const Router = require("restify-router").Router;
const router = new Router();
const DataBase = require("./config/db").DataBase;
require('dotenv').config();

const rjwt = require("restify-jwt-community")
const jwt = require("jsonwebtoken")

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(rjwt({secret: "my-secret-key"}).unless({path: ['/v1/authenticate']}))
});

router.add('', require('./routes'));

router.applyRoutes(server);
server.listen(8080, async function () {
    new DataBase(process.env.DBNAME).connet();
    console.log("server running on port: ", 8080);
})