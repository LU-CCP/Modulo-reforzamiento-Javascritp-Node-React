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

router.get("/v1/students/delete/:name", async (req, res) => {
  const { params } = req;
  console.log(params);
  let response;
  await userModel.findOneAndRemove(params, function(err, resp) {
    console.log(resp);
    if (err) {
      console.log(err);
    }
    response = resp.deletedCount;
  });
  if (response == 0) {
    res.send(400, "Student no encontrado");
  } else {
    res.send(200, "Student eliminado");
  }
});

router.post("/v1/students/save", async function(req, res) {
  const { body } = req;
  console.log(body);
  //var stud = new userModel();
  await userModel.create(body, function(err, resp) {
    console.log(resp);
    if (err) {
      console.log(err);
    }
  });
  res.send(200, "Student guardado");
});

router.put("/v1/students/edit/:id", async function(req, res) {
  let resultado;
  const { params, body } = req;
  const { id } = params;
  console.log(body, params);
  console.log(id);
  await userModel.findByIdAndUpdate(id, { $set: body }, function(err, resp) {
    console.log(resp);
    if (err) {
      console.log(err);
    }
    resultado = resp;
  });
  if (resultado) {
    res.send(200), "Student actualizado";
  } else {
    res.send(404, "Student no encontrado");
  }
});
module.exports = router;
