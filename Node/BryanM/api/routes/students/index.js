const Router = require("restify-router").Router;

const router = new Router();

router.get("/v1/students", function(request, response) {
  response.send(200, "Hello from students");
});

module.exports = router;
