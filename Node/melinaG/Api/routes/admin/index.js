const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
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
    res.send(200, "usuario permitido");
  } else {
    res.send(401, "usuario no permitido");
  }
});

router.get("/v1/admins", async function(req, res) {
  let admins;
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    admins = result;
    console.log("students", result);
  });
  res.send(200, admins);
});

module.exports = router;
