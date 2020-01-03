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
  let data;
  await userModel.find({}, function(err, result) {
    if (err) {
      res.json(401, { message: "Sucedio un error inesperado" });
      console.log(err);
    }
    data = result;
  });
  res.send(200, data);
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

router.put("/v1/students", async function(req, res) {
  let numRows;
  const { name, surname } = req.body;
  await userModel.updateOne({ name }, { surname }, function(err, result) {
    if (err)
      res.json(500, {
        message: "Lo siento hubo un error inesperado",
        error: err
      });
    numRows = result.n;
    console.log(numRows);
  });
  if (numRows) res.json(200, "Se actualizaron los datos correctamente");
  else res.json(401, "No se pudieron actualizar los datos");
});

router.del("/v1/students/:id", async function(req, res) {
  await userModel.findByIdAndDelete(req.params.id, function(err, result) {
    if (err) res.json(500, "Hubo un problema");
  });
  res.json(200, "Eliminado con exito");
});

module.exports = router;
