const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const userSchema = new Schema({
  user: String,
  password: String
});
const userModel = mongoose.model("admins", userSchema);
const router = new Router();

router.post("/v1/admin/", async function(req, res) {
  console.log(req.body);
  const n = req.body;
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (n === result) {
      res.send(200, "usuario permitido");
    } else {
      res.send(401, "usuario no permitido");
    }
  });
});
module.exports = router;
