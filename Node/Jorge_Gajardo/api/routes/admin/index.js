const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");

const adminSchema = new Schema({
  username: String,
  password: String
});

const router = new Router();
const userModel = mongoose.model("admin", adminSchema);

router.post("/v1/admin/post", async function(req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  await userModel.findOne({ username, password }, function(err, result) {
    if (!result) {
      res.send(401, "Usuario no autorizado");
    } else {
      let token = jwt.sign({ username, password }, "my-secret-key", {
        expiresIn: 20
      });
      console.log("token: ", token);
      res.send(200, token);
    }
  });
});

module.exports = router;
