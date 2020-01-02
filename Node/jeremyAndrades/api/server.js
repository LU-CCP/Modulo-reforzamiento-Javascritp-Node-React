const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const mongoose = require("mongoose");
const server = restify.createServer();
const bodyParser = require("body-parser");
server.use(bodyParser.json());

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/DBPatricio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port: ", 8080);
});
