const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const admin = require("./routes/admin");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
require("dotenv").config();

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/admin"]
  })
);

server.use(function(req, res, next) {
  if (req.url === "/v1/admin") {
    return next();
  }

  let authorization = req.header("authorization").split("");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alives!");
});

server.use(bodyParse.json());
router.add("", admin);
router.add("", studentsRoutes);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/LUDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port:", 8080);
});
