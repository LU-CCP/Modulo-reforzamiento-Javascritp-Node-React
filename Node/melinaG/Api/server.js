const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRouters = require("./routes/students");
const adminRouters = require("./routes/admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
const corsMiddleware = require("restify-cors-middleware");
const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorizacion"],
  exposeHeaders: ["Authorization"]
});
const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.jsonBodyParser());
server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/admin/post"]
  })
);
server.use(function(req, res, next) {
  if (req.url === "/v1/admin/post") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { massage: "Not authorized" });
    return next();
  }
});
server.use(bodyParser.json());
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});
router.add("", studentsRouters);
router.add("", adminRouters);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});
