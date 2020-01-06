const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const router = new Router();
const adminSchema = new Schema({
  username: String,
  password: String
});
const jwt = require("jsonwebtoken");

const userModel = mongoose.model("admins", adminSchema);

router.post("/v1/admin", async function(req, res) {
  let { username, password } = req.body;
  console.log(req.body);
  await userModel.find({ username, password }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result.length === 0) {
        res.send(401);
      } else {
        let token = jwt.sign({ username, password }, "my-secret-key", {
          expiresIn: 20
        });
        res.send(200, { token, result });
      }
    }
  });
});

module.exports = router;
