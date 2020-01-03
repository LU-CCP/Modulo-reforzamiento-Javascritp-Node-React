const restify = require("restify");
const Router = require("restify-router").Router;

const router = new Router();
const studentsRoutes = require("./routes/admin");
const mongoose = require("mongoose");

const rjwt = require("restify-jwt-community");
const jwt = require("jsonwebtoken");

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(rjwt({ secret: "my-secret-key" }).unless({ path: ["/v1/admin"] }));

router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/FFORMARCO", {
    userNewUrlParser: true,
    userUnifiedTopology: true
  });
  console.log("server running on port: ", 8080);
});
