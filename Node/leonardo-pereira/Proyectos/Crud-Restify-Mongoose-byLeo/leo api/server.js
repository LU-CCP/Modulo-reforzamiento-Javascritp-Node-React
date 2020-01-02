const restify = require("restify");
const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRutas = require("./rutas");
const login = require("./rutas/admin");
////
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");

//creando servidor

const miServer = restify.createServer();
miServer.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/login"]
  })
);

miServer.use(function(req, res, next) {
  if (req.url === "/login") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (error) {
    res.send(401, { message: "no autorizado" });
    return next();
  }
});
const rutas = new Router();

rutas.add("", studentRutas);
rutas.add("", login);
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
