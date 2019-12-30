const restify = require('restify');
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require('./routes/students');


const server = restify.createServer();
server.get('/api/status', function (req, res) {
    res.send(200, "Api is alive!!!!!");
});

router.add('', studentsRoutes);
router.applyRoutes(server);
server.listen(8080, function () {
    console.log("server running on port: ", 8081);
})