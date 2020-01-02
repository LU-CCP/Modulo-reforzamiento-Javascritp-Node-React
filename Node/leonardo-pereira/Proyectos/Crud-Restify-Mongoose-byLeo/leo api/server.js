const restify = require("restify");
const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRutas = require("./rutas");

//creando servidor

const miServer = restify.createServer();
const rutas = new Router();

rutas.add("", studentRutas);
rutas.applyRoutes(miServer);

miServer.use(bodyParser.json());

async function conectar() {
  //funcion para conectar a la base de datos
  try {
    await mongoose.connect("mongodb://localhost/leoDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
  }
}

miServer.listen(3010, async function() {
  await conectar(); //conectando
  console.log("servidor corriendo");
});
