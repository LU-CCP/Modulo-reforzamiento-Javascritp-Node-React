const Router = require("restify-router").Router;
const router = new Router();
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const jsonWebToken = require("jsonwebtoken");

const adminSchema = new Schema({
  name: String,
  surname: String
});
const adminModel = mongoose.model("admins", adminSchema);

router.post("/v1/admin", async (req, res) => {
  let admins = "";
  let token = "";
  const { user, pass } = req.body;
  await adminModel.find(
    { username: `${user}`, password: pass },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      token = jsonWebToken.sign({ user, pass }, "my-secret-key", {
        expiresIn: 20
      });
      admins = result;
    }
  );
  if (admins.length === 0) {
    res.json(401, "Authentication error");
  }
  res.json(200, { token: token });
});

module.exports = router;
