const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminRoutes = require("./routes/admin");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/admins/post"]
  })
);
server.use(function(req, res, next) {
  if (req.url === "/v1/admins/post") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { message: "Not authorized" });
  }
});
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!!!!!!");
});

router.add("", studentsRoutes);
router.add("", adminRoutes);

router.applyRoutes(server);
server.listen(8085, async function() {
  await mongoose.connect("mongodb://localhost/ejercicio1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port: ", 8085);
});
