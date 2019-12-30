const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRouters = require("./routes/students");
const mongoose = require("mongoose");
const server = restify.createServer();
const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});
router.add("", studentsRouters);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});
