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

router.del("/v1/students/delete/:name", async function(req, res) {
  console.log(req.params);
  await userModel.deleteOne({ name: req.params.name }),
    function(err) {
      if (err) return handleError(err);
    };
  res.send(200, "eliminado correctamente");
});

router.post("/v1/students/create", async function(req, res) {
  const { name, surname } = req.body;
  console.log(req.body);
  await userModel.create({ name, surname }, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log("students", result);
  });
  res.send(200, "Creado correctamente");
});

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
