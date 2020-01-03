const Router = require("restify-router").Router; //impoetamos Router para crear rutas
const mongoose = require("mongoose"); //impoetamos mongoose para interactuar con la base de datos
const Schema = require("mongoose").Schema; // importamos schema para definir el esquema de nuestra bd

const router = new Router();
const studentsSchema = new Schema({
  //nuevo esquema
  name: String,
  surname: String
});

const userModel = mongoose.model("students", studentsSchema); //definimos nuestro modelo para interactuar con la bd

//trae todos los datos de la tabla estudiante
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

//agrega un nuevo estudiante

router.post("/v1/students/save", async function(req, res) {
  const { body } = req;
  console.log(body);
  await userModel.create(body, function(err, resp) {
    console.log(resp);
    if (err) {
      console.log(err);
    }
  });
  res.send(200, "Student guardado");
});

//elimina un estudiante
router.get("/v1/students/delete/:name", async (req, res) => {
  const { params } = req;
  let response;
  await userModel.findOneAndRemove(params, function(err, resp) {
    console.log(resp);
    if (err) {
      console.log(err);
    }
    response = resp.deletedCount;
  });
  if (response == 0) {
    res.send(400, "no encontrado");
  } else {
    res.send(200, " eliminado");
  }
});

router.put("/v1/students/edit/:nombre", async function(req, res) {
  const { params, body } = req;
  console.log(body, params);
  await userModel.findOneAndUpdate(
    { nombre: params.nombre },
    { surname: body.surname },
    function(err, resp) {
      // console.log(resp);
      if (err) {
        console.log(err);
      }
    }
  );
});

module.exports = router;
