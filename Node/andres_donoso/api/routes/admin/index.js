const Router = require("restify-router").Router;
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");

const userSchema = new Schema({
  username: String,
  passwrod: String
});

const router = new Router();

const userModel = mongoose.model("admins", userSchema);

router.post("/v1/admins/post", async function(req, res) {
  let data;
  const userData = req.body;
  await userModel.findOne(userData, function(err, result) {
    if (err) res.send(401, "Autentificacion fallida");
    data = result;
  });

  if (data) {
    let token = jwt.sign({ userData }, "my-secret-key", {
      expiresIn: 20
    });
    console.log(token);
    res.send(200, { message: "Autenticacion Correcta", token });
  } else {
    res.send(401, "autenticacion fallida");
  }
});

router.get("/v1/admins", async function(req, res) {
  let admins = [];
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    admins = result;
    console.log("admins", result);
  });

  res.send(200, admins);
});

module.exports = router;
