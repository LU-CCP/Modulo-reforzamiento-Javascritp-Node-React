const restify = require("restify");
const bodyParser = require("body-parser");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminsRoutes = require("./routes/admins");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const rjwt = require("restify-jwt-community");
require("dotenv").config();

const server = restify.createServer();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(
  rjwt({
    secret: "my-secrect-key"
  }).unless({
    path: ["/v1/admin"]
  })
);

server.use(function(req, res, next) {
  if (req.url === "/v1/admin") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    let decoded = jwt.verify(authorization[1], "my-secrect-key");
    return next();
  } catch (err) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

server.get("/api/status", (req, res) => {
  res.send(200, "Api is alive!");
});

router.add("", studentsRoutes);
router.add("", adminsRoutes);
router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect(process.env.DBNAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port : ", 8080);
});
