const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminRoutes = require("./routes/admin");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const server = restify.createServer();

const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
server.use(bodyParser.json());
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
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

server.get("/api/status", function(req, res) {
  res.send(200, "Api is Adasflsxczdasivssse!");
});

router.add("", studentsRoutes);
router.add("", adminRoutes);

router.applyRoutes(server);

server.listen(7080, async function() {
  await mongoose.connect("mongodb://localhost/LUDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port ", 7080);
});
