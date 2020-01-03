const Router = require("restify-router").Router;

const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const adminSchema = new Schema({
  user: String,
  password: String
});

const jwt = require("jsonwebtoken");

const router = new Router();
const adminModel = mongoose.model("admins", adminSchema);

router.post("/login", async function(req, res) {
  let resultado;

  try {
    const { body } = req;
    await adminModel.find(body, function(err, result) {
      if (err) {
        console.log(err);
      }
      resultado = result;
    });
    if (resultado.length > 0) {
      let { user, password } = resultado;
      let token = jwt.sign({ user, password }, "my-secret-key", {
        expiresIn: 2000
      });
      //res.send(200, { message: "Administrador logeado", token: token });
      res.send(200, token);
    } else {
      res.send(401, "Usuario no autorizado");
    }
  } catch (error) {
    res.send(500, error);
  }
});

module.exports = router;
