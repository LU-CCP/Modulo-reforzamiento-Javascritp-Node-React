const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");

const esquemaLogin = new Schema({
  user: String,
  password: String
});

const login = new Router();
const modelo = mongoose.model("logins", esquemaLogin);

login.post("/login", async (req, res) => {
  let body = req.body;
  console.log(body);
  let resultado;
  await modelo.find(body, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      resultado = result;
      console.log(result);
    }
    if (resultado.length > 0) {
      let { user, password } = resultado;
      let token = jwt.sign({ user, password }, "my-secret-key", {
        expiresIn: 20
      });

      console.log(token);
      res.send(token);

      //res.send(200, resultado);
    } else {
      res.send(401, "no autorizado");
    }
  });
});

login.get("/listUser", async function(req, res) {
  let resultado;
  await modelo.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    resultado = result;
    console.log(result);
    res.send(200, resultado);
  });
});

//editUser

login.put("/updateUser/:id", (req, res) => {
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

module.exports = login;
