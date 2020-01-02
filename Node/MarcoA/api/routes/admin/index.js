const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Router = require("restify-router").Router;
const Schema = require("mongoose").Schema;
const loginSchema = new Schema({
  username: String,
  password: String
});
const router = new Router();
const loginModel = mongoose.model("admins", loginSchema);

router.get("/v1/login/", async function(request, response) {
  let login;

  await loginModel.find({}, function(error, result) {
    if (error) {
      console.log(error);
    }
    login = result;
    console.log("Users", result);
  });

  response.send(200, login);
});

router.post("/v1/admin/", async function(request, response) {
  const { username, password } = request.body;

  await loginModel.find({ username, password }, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      if (result.length === 0) {
        response.send(401, "Recurso no encontrado");
      } else {
        let token = jwt.sign({ username, password }, "my-secret-key", {
          expiresIn: 20
        });
        console.log("Token: ", token);
        response.send(200, token);
      }
    }
  });

  // if ((username === "admin" && password === "admin")) {
  //   response.send(200, response);
  // } else {
  //   response.send(400, response);
  // }
});

module.exports = router;
