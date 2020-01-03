const Router = require("restify-router").Router;
const router = new Router();
const { adminModel } = require("../../models");
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

router.post("/admin", async function(req, res) {
  await adminModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
    //  console.log("token");
  });

  /* let { username, password } = result;
  let token = jwt.sign({ username, password }, "my-secret-key", {
    expiresIn: 20
  });*/
});

module.exports = router;
