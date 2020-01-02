const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jwt = require("jsonwebtoken");

const adminsSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("admins", adminsSchema);

router.post("/v1/admin", async function(req, res) {
  try {
    let admins;
    await userModel.find({}, function(err, result) {
      let { username, password } = result;
      let token = jwt.sign({ username, password }, "my-secret-password", {
        expiresIn: 20
      });
      console.log(token);
      res.send(result, token);
    });
  } catch (err) {
    res.send(500, err);
  }
  res.send(401, admins);
});

module.exports = router;
