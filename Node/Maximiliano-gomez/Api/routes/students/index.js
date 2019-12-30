const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentSchema);
// ulr base/v1/students
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

router.post("/v1/students", async function(req, res) {
  const { name, surname } = req.body;
  console.log(name);
  const saveStudents = new userModel({
    name,
    surname
  });
  await saveStudents.save(function(err) {
    if (err) res.json(500, "datos NO ingresados");
  });
  res.json(200, "se ingresaron los datos correctamente");
});

module.exports = router;
