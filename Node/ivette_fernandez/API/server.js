const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/index");
const adminssRoutes = require("./routes/admins/index");
const mongoose = require("mongoose");
const DataBase = require("./Config/db").DataBase;
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
require("dotenv").config();
const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.use(rjwt({ secret: "my-secret-key" }).unless({ path: ["/v1/admins"] }));

server.use(function(req, res, next) {
  console.log(req.url);
  if (req.url === "/v1/admins") {
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

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.add("", adminssRoutes);
router.applyRoutes(server);
server.listen(8080, async function() {
  new DataBase(process.env.DBNAME).connet();
  console.log("server is running on port:", 8080);
});
