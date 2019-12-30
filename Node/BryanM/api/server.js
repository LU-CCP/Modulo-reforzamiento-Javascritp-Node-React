const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");

const server = restify.createServer();
server.get("/api/status", function(request, response) {
  response.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(3000, function() {
  console.log("Server running on port:", 3000);
});
