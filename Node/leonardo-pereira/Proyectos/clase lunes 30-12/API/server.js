const restify = require("restify");
const server = restify.createServer();
const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const BodyParser = require("body-parser");

const router = new Router();
const studentsRoutes = require("./routes/students");
server.use(BodyParser.json());

server.get("/api/status", function(req, res) {
  res.send(200, "API is alive!");
});

router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(8080, async function() {
  try {
    await mongoose.connect("mongodb://localhost/leoDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
    console.log("error en la conexion");
  }

  console.log("servidor corriendo en el puerto : ", 8080);
});
