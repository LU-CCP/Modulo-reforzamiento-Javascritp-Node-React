const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRouter = require("./routes/students");
const adminRouter = require("./routes/admin");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");

require("dotenv").config();

const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.jsonBodyParser());
server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/login"]
  })
);
server.use(function(req, res, next) {
  if (req.url === "/v1/login") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

const bodyParser = require("body-parser");
server.use(bodyParser.json());

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});

router.add("", studentsRouter);
router.add("", adminRouter);
router.applyRoutes(server);
server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/LUDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port: ", 8080);
});
