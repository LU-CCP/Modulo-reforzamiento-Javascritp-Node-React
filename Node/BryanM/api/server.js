const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminsRoutes = require("./routes/admins");
const mongoose = require("mongoose");
const rjwt = require("restify-jwt-community");
const jwt = require("jsonwebtoken");

const server = restify.createServer();
server.use(rjwt({ secret: "my-secret-key" }).unless({ path: ["/v1/admins"] }));
server.use(restify.plugins.jsonBodyParser());
router.add("", studentsRoutes);
router.add("", adminsRoutes);
router.applyRoutes(server);

server.use((req, res, next) => {
  if (req.url === "/v1/admins") {
    return next();
  }
  let authorization = req.header("authorization").split(" ");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { message: "No authorized" });
  }
});

server.get("/api/status", function(request, response) {
  response.send(200, "Api is alive!");
});

server.listen(3000, async function() {
  await mongoose.connect("mongodb://localhost/dbPatricio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Server running on port:", 3000);
});
