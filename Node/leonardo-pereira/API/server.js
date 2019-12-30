const restify = require("restify");
const server = restify.createServer();
const Router = require("restify-router").Router;

const router = new Router();
const studentsRoutes = require("./routes/students");

server.get("/api/status", function(req, res) {
  res.send(200, "API is alive!");
});

router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(8080, function() {
  console.log("servidor corriendo en el puerto : ", 8080);
});
