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

router.post("/v1/admins", async function(req, res) {
  let adminssNew;
  let status = 0;
  const { username, password } = req.body;
  let token = jwt.sign({ username, password }, "my-secret-key", {
    expiresIn: 25
  });
  console.log(token);
  await userModel.find({ username }, function(err, result) {
    if (err) {
      console.log(err);
    }
    adminssNew = result;
  });
  if (adminssNew == "") {
    status = 401;
    adminssNew = "usuario no autorizado";
  } else if (adminssNew != "") {
    status = 200;
    adminssNew = "Ingreso Exitoso! ";
  }
  // let tokens = { token };
  res.send(status, { adminssNew, token: token });
});
module.exports = router;
