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
//ingresar students
router.post("/v1/studentsPost", async function(req, res) {
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
//eliminar students
router.del("/v1/students/delete/:name", async function(req, res) {
  console.log(req.params);
  await userModel.deleteOne({ name: req.params.name }),
    function(err) {
      if (err) return console.log(err);
    };
  res.send(200, "eliminado correctamente");
});
// actualizar students
router.put("/v1/students/update/:name", async function(req, res) {
  const { name, surname } = req.body;
  await userModel.updateOne(
    { name: req.params.name },
    { name, surname },
    function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log("students", result);
    }
  );
  res.send(200, "Actualizado correctamente");
});

module.exports = router;
