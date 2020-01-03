const Router = require("restify-router").Router;
const rjwt = require("restify-jwt-community");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const adminSchema = new Schema({
  user: String,
  password: String
});

const router = new Router();
const userModel = mongoose.model("admins", adminSchema);

router.get("/v1/admin", async function(req, res) {
  let admin;
  await userModel.find({}, function(err, result) {
    try {
      let { user, password } = result;
      let token = jwt.sign({ user, password }, "my-secret-key", {
        expiresIn: 20
      });
      res.send({ result, token });
    } catch (err) {
      console.log(err);
    }
  });
  res.send(401, admin);
});

module.exports = router;
