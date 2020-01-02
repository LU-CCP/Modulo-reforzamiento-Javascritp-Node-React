const mongoose = require("mongoose");
const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const bodyParser = require("body-parser");

const server = restify.createServer();
server.use(bodyParser.json());
server.get("/api/status", function(require, response) {
  response.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.applyRoutes(server);
server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/PatricioStar", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port 8080");
});
