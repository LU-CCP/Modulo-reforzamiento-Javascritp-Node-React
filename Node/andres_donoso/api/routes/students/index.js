const Router = require("restify-router").Router;
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const studentSchema = new Schema({ name: String, surname: String });

const router = new Router();
// url base/v1/students
const userModel = mongoose.model("students", studentSchema);

router.get("/v1/students", async function(req, res) {
  let students = [];
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    students = result;
    console.log("students", result);
  });

  res.send(200, students);
});

router.post("/v1/students/post", async function(req, res) {
  const newStudent = req.body;
  await userModel.create(req.body, function(err, newStudent) {
    if (err) console.log(err);
    // saved!
    res.send(200);
  });
});

router.put("/v1/students/update/:_id", async function(req, res) {
  let id = ({} = req.params);
  console.log(req.params);
  console.log(id);

  await userModel.updateOne(id, req.body, function(err, newStudent) {
    if (err) {
      console.log(err);
    }
    res.send(200);
  });
});

router.del("/v1/students/delete/:_id", async function(req, res) {
  let id = ({} = req.params);
  console.log(req.params);
  console.log(id);

  await userModel.deleteOne(id, function(err, newStudent) {
    if (err) {
      console.log(err);
    }
    res.send(200);
  });
});

module.exports = router;
