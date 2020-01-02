const Router = require('restify-router').Router;
const mongoose = require('mongoose'); 
const Schema = require('mongoose').Schema; 


const router = new Router();
const studentSchema = new Schema({
    name: String,
    surname: String
});
const userModel = mongoose.model('students',studentSchema);
router.get('/v1/students', async function(req,res){
    let students;
    await userModel.find({},function(err,res){
        students = res;
        if(err) console.log(err);
        console.log('students', res);
    })
    res.send(200,students);
})
router.post('/v1/students', function(req,res){
    const {name,surname}=req.body;
    userModel.create({'name': name,'surname': surname},function(err,res){
        if (err) console.log(err);
    })
    res.send(200)
})
// router.put('./v1/students',function(req,res){
//     userModel.update({})
// })
router.del('/v1/students',function(req,res){
    const {name,surname} = req.body;
    userModel.deleteOne({'name': name,'surname': surname},function(err,res){
        if (err)console.log(err)
    })
    res.send(202);
})
module.exports=router;