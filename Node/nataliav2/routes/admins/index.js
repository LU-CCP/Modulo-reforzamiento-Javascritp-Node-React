const Router = require("restify-router").Router;
const { adminModel } = require("../../models");
const router = new Router();

router.post("./admins", async function(req, res) {
  try {
  } catch (err) {
    res.send(err);
  }
});
