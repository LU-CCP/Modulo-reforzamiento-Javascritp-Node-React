const restify = require('restify');
const Router = require("restify-router").Router;
const router = new Router();
const DataBase = require("./config/db").DataBase;
require('dotenv').config();

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.get('/api/status', function (req, res) {
    res.send(200, "Api is alive!!!!!");
});

router.add('', require('./routes'));

router.applyRoutes(server);
server.listen(8080, async function () {
    new DataBase(process.env.DBNAME).connet();
    console.log("server running on port: ", 8080);
})