const studentsRouter = require("./routes/students");
const adminRouter = require("./routes/admin");

const restify = require("restify");
const rjwt = require("restify-jwt-community");
const Router = require("restify-router").Router;
const router = new Router();
const mongoose = require("mongoose");
const server = restify.createServer();
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
server.use(bodyParser.json());

server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/adminsPost"]
  })
);

server.use(function(req, res, next) {
  if (req.url === "/v1/adminsPost") {
    return next();
  }

  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { message: "Not Authorized" });
    return next();
  }
});

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});

router.add("", adminRouter);
router.add("", studentsRouter);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/DBPatricio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port: ", 8080);
});
