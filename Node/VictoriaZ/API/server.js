const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();

require("dotenv").config();
const bodyParser = require("body-parser");

const studentsRoutes = require("./routes/students");

const login = require("./routes/admin");

const mongoose = require("mongoose");

const rjwt = require("restify-jwt-community");
const jwt = require("jsonwebtoken");

const server = restify.createServer();
server.use(bodyParser.json());
server.use(rjwt({ secret: "my-secret-key" }).unless({ path: ["/login"] }));
server.use(function(req, res, next) {
  if (req.url === "/login") {
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
router.add("", login);

router.applyRoutes(server);
server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/DBej", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port 8080: ", 8080);
});
