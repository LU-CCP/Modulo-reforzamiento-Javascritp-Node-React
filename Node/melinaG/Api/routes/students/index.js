const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  lastName: String
});
const router = new Router();
const userModel = mongoose.model("nombres", studentSchema);

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

router.put("/v1/students/:name", async function(req, res) {
  let newStudent = req.body;
  await userModel.updateOne(req.body, function(err, newStudent) {
    if (err) {
      console.log(err);
    }

    res.send(200);
  });
});

module.exports = router;
