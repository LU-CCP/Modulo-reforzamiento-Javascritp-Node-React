const restify = require("restify");
const Router = require("restify-router").Router;
const router = new Router();
const studentsRoutes = require("./routes/students");
const adminsRoutes = require("./routes/admins");
const mongoose = require("mongoose");
const rjwt = require("restify-jwt-community");
const jwt = require("jsonwebtoken");

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(
  rjwt({ secret: "my-secret-key" }).unless({
    path: ["/v1/admin"]
  })
);
server.get("/api/status", function(req, res) {
  res.send(200, "Api is aLiVe!!!!!");
});

router.add("", studentsRoutes);
router.add("", adminsRoutes);

router.applyRoutes(server);

server.listen(8080, async function() {
  await mongoose.connect("mongodb://localhost/FFORFABIAN", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("server running on port: ", 8080);
});
