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

router.put("/v1/students", async function(req, res) {
  let studentsUpdated;
  await userModel.updateOne({ name: "Pedro" }, req.body, function(err, result) {
    if (err) {
      console.log(err);
    }
    studentsUpdated = result;
    console.log("Updated students", result);
  });
  res.send(200, studentsUpdated);
});

router.del("/v1/students", async function(req, res) {
  let studentsDeleted;
  const { surname } = req.body;
  await userModel.deleteOne({ surname }, function(err, result) {
    if (err) {
      console.log(err);
    }
    studentsDeleted = result;
    console.log("Deleted", result);
  });
  res.send(200, studentsDeleted);
});

router.post("/v1/students", async function(req, res) {
  let studentsNew;
  const { name, surname } = req.body;
  await userModel.create({ name, surname }, function(err, result) {
    if (err) {
      console.log(err);
    }
    studentsNew = result;
    console.log("New students", result);
  });
  res.send(200, studentsNew);
});
module.exports = router;
