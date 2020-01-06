const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminRoutes = require("./routes/admins");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const DataBase = require("./config/db").DataBase;
require("dotenv").config();
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});
// For tokens
const jsonWebToken = require("jsonwebtoken");
const restifyJwtCommunity = require("restify-jwt-community");

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);

server.use(bodyParser.json());
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

server.get("/api/status", (req, res) => {
  res.send(200, "Api is alive!");
});

router.add("", require("./routes"));
// router.add("", studentsRoutes);
// router.add("", adminRoutes);
router.applyRoutes(server);

server.listen(8080, async () => {
  new DataBase(process.env.DBNAME).connet();
  console.log("server running on port: ", 8080);
});
