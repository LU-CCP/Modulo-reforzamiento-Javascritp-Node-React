const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");

const LoginSchema = new Schema({
  username: String,
  password: String
});

const router = new Router();
const userModel = mongoose.model("admin", LoginSchema);

router.post("/v1/login", async function(req, res) {
  const { username, password } = req.body;
  await userModel.findOne({ username, password }, function(err, result) {
    if (!result) {
      res.send(401, "Usuario no autorizado");
    } else {
      let token = jwt.sign({ username, password }, "my-secret-key", {
        expiresIn: 9000000
      });
      res.send(200, "Bienvenido " + token);
    }
  });
});

module.exports = router;
