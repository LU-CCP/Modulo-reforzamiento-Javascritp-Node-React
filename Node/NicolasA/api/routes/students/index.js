const mongoose = require("mongoose");
const Router = require("restify-router").Router;
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentSchema);
// url base/v1/students
router.get("/v1/students", async function(request, response) {
  let students;

  await userModel.find({}, function(error, result) {
    if (error) {
      console.log(error);
    }
    students = result;
    console.log("Students", result);
  });

  response.send(200, students);
});

//Add
router.post("/v1/students/", async function(request, response) {
  const { name, surname } = request.body;
  let student = new userModel({ name, surname });
  let results;

  await student.save(function(error, student) {
    if (error) {
      console.log(error);
    }
    results = student;
  });

  response.send(200, results);
});

module.exports = router;

//Delete
router.del("/v1/students/:name", async function(request, response) {
  console.log(request.params);

  await userModel.deleteOne({ name: request.params.name }, function(err) {
    if (err) console.log(err);
  });

  response.send(200, ":D");
});
