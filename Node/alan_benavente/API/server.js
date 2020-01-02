const restify = require('restify');
const Router = require('restify-router').Router;
const studentsRoutes=require('./routes/students');
const adminRoutes=require('./routes/admin/index');
const jwt = require('jsonwebtoken');
const rjwt = require('restify-jwt-community');
const Database = require('./config/db').DataBase
const mongoose = require('mongoose'); 
require('dotenv').config();

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

    new Database(process.env.DBNAME).connet();
    console.log('server running on port: ',8080);
})