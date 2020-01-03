const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const rutas = new Router();

const esquema = new Schema({
  name: String,
  surname: String
});

const modelo = mongoose.model("students", esquema);

//lista los datos
rutas.get("/list", async function(req, res) {
  let resultado;
  await modelo.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    resultado = result;
    res.send(200, resultado);
  });
});

//elimina un dato

rutas.del("/del/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  modelo.findById(id, (err, student) => {
    if (err) {
      console.log(err);
      res.send(500, "error no existe");
    } else {
      student.remove(err => {
        if (err) {
          res.send(500, "error al eliminar");
        } else {
          res.send(200, "se elimino correctamente!");
        }
      });
    }
  });
});

//agrega un dato

rutas.post("/add", async function(req, res) {
  const { body } = req;
  console.log(body);
  await modelo.create(body, function(err, resp) {
    if (err) {
      console.log(err);
    }
    console.log(resp);
  });

  res.send(200, "guardado");
});

//actualiza

rutas.put("/update/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;
  console.log(body);
  modelo.findByIdAndUpdate(id, body, (err, resultado) => {
    if (err) {
      console.log("error al actualizar");
    } else {
      res.send(200);
      console.log("listo!");
    }
  });
});

module.exports = rutas;
