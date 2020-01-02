const restify = require('restify');
const Router = require('restify-router').Router;
const studentsRoutes=require('./routes/students');
const mongoose = require('mongoose'); 

const server = restify.createServer();
server.use(restify.plugins.bodyParser())

const router = new Router();
server.get('/api/status',function(req,res){
    res.send(200, 'API is alive!!!');
});
router.add('',studentsRoutes);
router.applyRoutes(server);
server.listen(8080,async function(){

    await mongoose.connect('mongodb://localhost/HOLA',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('server running on port: ',8080);
})