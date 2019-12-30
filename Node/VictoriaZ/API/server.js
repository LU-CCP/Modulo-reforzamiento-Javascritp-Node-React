const restify = require("restify");

const server = restify.createServer();
server.get("/api/status", function(req, res) {
  res.send(200, "Api is alive!");
});
server.listen(8080, function() {
  console.log("server running on port 8080: ", 8080);
});
