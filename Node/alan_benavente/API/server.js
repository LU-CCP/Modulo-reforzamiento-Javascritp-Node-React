const restify = require('restify');
const Router = require('restify-router').Router;
const studentsRoutes=require('./routes/students');
const adminRoutes=require('./routes/admin/index');
const jwt = require('jsonwebtoken');
const rjwt = require('restify-jwt-community');

const mongoose = require('mongoose'); 



const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.use(rjwt({ secret: 'my-secret-key'}).unless({path: ['/v1/admin']}));

const router = new Router();
server.use(function(req,res,next){})
server.get('/api/status',function(req,res){
    res.send(200, 'API is alive!!!');
});
router.add('',studentsRoutes);
router.add('',adminRoutes);
router.applyRoutes(server);
server.listen(8080,async function(){

    await mongoose.connect('mongodb://localhost/HOLA',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('server running on port: ',8080);
})