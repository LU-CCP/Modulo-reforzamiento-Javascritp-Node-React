const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminRoutes = require("./routes/admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Para tokens
const jsonWebToken = require("jsonwebtoken");
const restifyJwtCommunity = require("restify-jwt-community");

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(
  restifyJwtCommunity({ secret: "my-secret-key" }).unless({
    path: ["/v1/admin"]
  })
);
server.use((req, res, next) => {
  if (req.url === "/v1/admin") {
    return next();
  }

  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jsonWebToken.verify(authorization[1], "my-secret-key");
    return next();
  } catch (error) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

server.use(bodyParser.json());

server.get("/api/status", (req, res) => {
  res.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.add("", adminRoutes);
router.applyRoutes(server);

server.listen(8080, async () => {
  await mongoose.connect("mongodb://localhost/db_students", {
    userNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port", 8080);
});
