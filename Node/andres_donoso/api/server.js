const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRouter = require("./routes/students");
const adminRouter = require("./routes/admin");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const server = restify.createServer();
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");

server.use(bodyparser.json());

server.use(function(req, res, next) {
  console.log(req.url);
  if (req.url === "/v1/admins/post") {
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

server.use(
  rjwt({
    secret: "my-secret-key"
  }).unless({ path: ["/v1/admins/post"] })
);

server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});

router.add("", studentsRouter);
router.add("", adminRouter);
router.applyRoutes(server);
server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/LUDB", {
    userNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port: ", 8080);
});
