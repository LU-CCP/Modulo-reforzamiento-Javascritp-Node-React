const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const server = restify.createServer();
server.use(bodyparser.json());
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!!!!!");
});

router.add("", studentsRoutes);
router.applyRoutes(server);
server.listen(8082, async function() {
  await mongoose.connect("mongodb://localhost/NataliaLu", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port: ", 8082);
});
