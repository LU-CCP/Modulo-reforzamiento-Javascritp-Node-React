const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentSchema);
//url base/v1/students
router.get("/v1/students", function(req, res) {
  userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log("students", result);
  });
  res.send(200, "Hello from students");
});

module.exports = router;
