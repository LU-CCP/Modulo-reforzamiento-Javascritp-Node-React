const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  lastname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentSchema);
// Url base: localhost 8080/v1/students
router.get("/v1/students", async function(req, res) {
  let students;
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    students = result;
    console.log("students", result);
  });
  res.send(200, students);
});

// router.put('/students', async function (req, res){
//   let rowAffected;
//   try {
//     const {conditions, document} = req.body;
//     await studentModel.updateOne(conditions, document, function )
//   } catch (error) {
    
//   }
// })
// router.del('/students', async function(req, res){
//   let rowAffected;
//   try {
//     const {conditions} = req.body;
//     await studentModel.deleteOne(conditions, function (err, result){
//       res.
//     })
//   } catch (err) {
//     res.send(500, err);
//   }
// })

module.exports = router;
