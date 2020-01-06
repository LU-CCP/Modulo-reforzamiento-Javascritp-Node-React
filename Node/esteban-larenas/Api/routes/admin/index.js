const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");
const adminSchema = new Schema({
  name: String,
  lastname: String
});

const router = new Router();
const userModel = mongoose.model("admins", adminSchema);

router.get("/v1/admins", async function(req, res) {
  let admins;
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    admins = result;
    console.log("admin", result);
  });
  res.send(200, admins);
});

router.post("/v1/admins/post", async function(req, res) {
  let admins;
  const { username, password } = req.body;
  await userModel.findOne({ username, password }, function(err, result) {
    if (err) res.json(401, "Autentificación Fallida");

    admins = result;
  });
  if (admins) {
    let token = jwt.sign({ username, password }, "my-secret-key", {
      expiresIn: 10000
    });
    res.send(200, token);
    console.log("admin", token);
  } else res.json(401, "Autentificación Fallida");
});
module.exports = router;
