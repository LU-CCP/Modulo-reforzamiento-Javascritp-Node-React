const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
const userSchema = new Schema({
  user: String,
  password: String
});
const userModel = mongoose.model("admins", userSchema);
const router = new Router();

router.post("/v1/admin/post", async function(req, res) {
  console.log("inicio");
  let data;
  const n = req.body;
  await userModel.findOne(n, function(err, result) {
    if (err) res.send(401, "error al buscar");
    data = result;
  });

  if (data) {
    let token = jwt.sign(n, "my-secret-key", {
      expiresIn: "1d"
    });
    console.log(token);
    res.send(200, "usuario permitido");
  } else {
    res.send(401, "usuario no permitido");
  }
});

module.exports = router;
