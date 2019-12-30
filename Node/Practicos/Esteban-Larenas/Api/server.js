const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const mongoose = require("mongoose");

const server = restify.createServer();
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!!!!!!");
});

server.del("/api/delete", function(req, res) {
    
});

router.add("", studentsRoutes);
router.applyRoutes(server);
server.listen(8085, async function() {
  await mongoose.connect("mongodb://localhost/ejercicio1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port: ", 8085);
});
