const Router = require("restify-router").Router;

const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentsSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentsSchema);
router.get("/v1/students", async function(req, res) {
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log("students", result);
  });
  res.send(200, "Hello from students");
});

router.post("/v1/students", async function(req, res) {
  const { name, surname } = req.body;
  const saveStudents = new userModel({
    name,
    surname
  });
  await saveStudents.save(function(err) {
    if (err) res.json(500, "No se ingresaron los datos");
  });
  res.json(200, "Se ingresaron los datos correctamente");
});

router.put("/v1/students", async function(req, res) {});

router.del("/v1/students/:id", async function(req, res) {
  await userModel.findById(req.params.id, function(err, result) {
    if (err) res.json(500, "Hubo un problema");
    result.remove();
  });
  res.json(200, "Eliminado con exito");
});

module.exports = router;
