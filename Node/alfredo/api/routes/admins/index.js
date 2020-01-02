const Router = require("restify-router").Router;
const router = new Router();
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const adminsSchema = new Schema({
  username: String,
  password: String
});
const jwt = require("jsonwebtoken");
const userModel = mongoose.model("admins", adminsSchema);

router.post("/v1/admin", async function(req, res) {
  const { username, password } = req.body;
  let data;
  await userModel.findOne({ username, password }, function(err, result) {
    if (err) res.json(401, "Autentificación fallida!");
    data = result;
  });
  if (data) {
    let token = jwt.sign({ username, password }, "my-secret-key", {
      expiresIn: 20
    });
    console.log(token);
    res.json(200, token);
  } else res.json(401, "Autentificación fallida!");
});

module.exports = router;
