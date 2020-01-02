const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminsRoutes = require("./routes/admins");
const mongoose = require("mongoose");

const server = restify.createServer();
server.get("/api/status", function(request, response) {
  response.send(200, "Api is alive!");
});

server.use(restify.plugins.jsonBodyParser());
router.add("", studentsRoutes);
router.add("", adminsRoutes);
router.applyRoutes(server);

server.listen(3000, async function() {
  await mongoose.connect("mongodb://localhost/dbPatricio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port:", 3000);
});
