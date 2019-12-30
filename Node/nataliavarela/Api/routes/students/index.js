const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const stundentSchema = new Schema({
  name: String,
  surname: String
});
const router = new Router();
const userModel = mongoose.model("students", stundentSchema);
//url base/v1/students
router.get("/v1/students", function(req, res) {
  let students;
  userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    students = result;
    console.log("students", result);
  });
  res.send(200, students);
});

router.post("v1/add",async(req,res){
    const {name,surname} = req.body;
     

});
module.exports = router;
