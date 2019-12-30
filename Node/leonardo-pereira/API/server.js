const restify = require("restify");
const server = restify.createServer();

server.get("api/status", function(req, res) {
  res.send(200, "API is alive!");
});
server.listen(8080, function() {
  console.log("servidor corriendo en el puerto : 8080");
});
