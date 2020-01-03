const Router = require('restify-router').Router;
const mongoose = require('mongoose'); 
const Schema = require('mongoose').Schema; 
const jwt = require('jsonwebtoken');


const router = new Router();
const adminSchema = new Schema({
    username: String,
    password: String
});
const userModel = mongoose.model("admin",adminSchema);

router.get('/v1/admin', async function(req,res){
    let admin;
    await userModel.find({},function(err,res){
        admin = res;
        if(err) console.log(err);
        console.log('admin', res);
    })
    res.send(200,admin);
});
// router.post('/v1/admin', async function(req,ress){
//     const {username,password}=req.body;
//     let {username,password}=result;
//     let token = jwt.sing({username,password},'my-secret-key',{expiresIn: 20});
//     console.log(token)
//     let admin;
//     let status=200;
//     await userModel.find({username},function(err,res){
//         admin = res;
//         if(admin=='') status=401;
//         console.log('admin', admin);
//     })
//     ress.send(status,admin);
// })
router.post("/v1/admin",async function(req,res){
    let adminsNew;
    let status=200;
    const {username,password}=req.body;
    console.log(req.body)
    let token = jwt.sign({username,password},'my-secret-key',{expiresIn: 10000});
    await userModel.find({username},function(err,ress){
        console.log(ress)
        console.log(err)
        if(err){console.log(err);}
        adminsNew=ress;
    });
    if (adminsNew=='')
     {status=401; 
      adminsNew='No autorizado'}
      else if(!adminsNew=='')
      {
          status=200;
          adminsNew='ingreso exitoso';
      }
      res.send(status,adminsNew +' '+ token)
})



module.exports=router;

