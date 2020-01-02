const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jsonWebToken = require("jsonwebtoken");

const adminSchema = new Schema({
  username: String,
  password: String
});

const router = new Router();

const userModel = mongoose.model("admins", adminSchema);

router.get("/v1/admins", async function(request, response) {
  let login;
  await userModel.find({}, function(error, result) {
    error ? console.log(error) : (login = result);
    console.log("Users", result);
  });

  response.send(200, login);
});

//validar admins
router.post("/v1/adminsPost", async function(req, res) {
  const { username, password } = req.body;
  let token;
  await userModel.findOne({ username, password }, function(err, result) {
    !result
      ? res.send(401, "Usuario no Autorizado")
      : (token = jsonWebToken.sign({ username, password }, "my-secret-key", {
          expiresIn: 20
        }));
    res.send(200, "Bienvenido " + username + "su token es: " + token);
    console.log(token);
  });
});

module.exports = router;
