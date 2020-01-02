const restify = require('restify');
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require('./routes/students');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const server = restify.createServer()

server.use(bodyParser.json());

server.get('/api/status', (req, res) => {
    res.send(200, 'Api is alive!');
})

router.add('', studentsRoutes);
router.applyRoutes(server);

server.listen(8080, async () => {
    await mongoose.connect('mongodb://localhost/db_students', {
        userNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Server running on port', 8080);
})