const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");

const server = restify.createServer();

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alives!");
});

server.use(bodyParse.json());

router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/LUDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port:", 8080);
});
