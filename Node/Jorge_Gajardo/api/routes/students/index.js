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
  let student;
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log("students", result);
    student = result;
  });
  res.send(200, student);
});

router.post("/v1/students/post", async function(req, res) {
  console.log(req.body);
  await userModel.create(
    { name: req.body.name, surname: req.body.surname },
    function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log("students", result);
    }
  );

  res.send(200, "agregado");
});

router.del("/v1/students/delete", async function(req, res) {
  console.log(req.body);
  await userModel.deleteOne({ name: "req.body.name" }, function(err) {
    if (err) {
      console.log(err);
    }
  });

  res.send(200, "borrado");
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
