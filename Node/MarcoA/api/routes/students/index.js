const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentSchema);
// url base/v1/students

//Get
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

//delete
router.del("/v1/students", async function(req, res) {
  let students;
  await userModel.deleteOne({ name: "Marco" }, function(err) {
    if (err) return handleError(err);
    // deleted at most one tank document
  });
  res.send(200, students);
});

//put
router.put("/v1/students", async function(req, res) {
  let students;
  await userModel.updateOne({ name: "F_marquito" }, { name: "Marco" }, function(
    err,
    res
  ) {
    if (err) return handleError(err);
    // deleted at most one tank document
  });
  res.send(200, students);
});

module.exports = router;
