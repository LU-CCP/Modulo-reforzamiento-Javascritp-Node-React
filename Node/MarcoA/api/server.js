const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
const mongoose = require("mongoose");
const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const loginRoutes = require("./routes/admin");
const bodyParser = require("body-parser");

const server = restify.createServer();
server.use(bodyParser.json());
server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/admin/"]
  })
);
server.use(function(request, response, next) {
  if (request.url === "/v1/admin/") {
    return next();
  }

  let authorization = request.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (error) {
    response.send(401, { message: "Not authorized" });
    return next();
  }
});

server.get("/api/status", function(require, response) {
  response.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.add("", loginRoutes);
router.applyRoutes(server);
server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/PatricioStar", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port 8080");
});
