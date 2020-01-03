const restify = require("restify");
const Router = require("restify-router").Router;
const jsonwebtoken = require("jsonwebtoken");
const restifyjwtcommunity = require("restify-jwt-community");
const router = new Router();
const DataBase = require("./config/db").DataBase;

const server = restify.createServer();
server.use(restify.plugins.jsonBodyParser());
server.use(
  restifyjwtcommunity({ secret: "my-secret-key" }).unless({
    path: ["/v1/admin"]
  })
);
/*server.use(function(req, res, next) {
  if (req.url === "/v1/authenticate") {
    return next();
  }
  let authorization = req.header("authorization").split("");
  try {
    var decoded = jwt.verify(authorization[1], "my-secret-key");
    return next();
  } catch (err) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});*/
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!!!!!");
});

router.add("", require("./routes"));

router.applyRoutes(server);
server.listen(8081, async function() {
  new DataBase("LUDB").connet();
  console.log("server running on port: ", 8081);
});
