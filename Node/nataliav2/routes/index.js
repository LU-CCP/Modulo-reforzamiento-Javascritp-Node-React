const Router = require("restify-router").Router;
const router = new Router();

router.add("/v1", require("./students"));
router.add("/v1", require("./auth"));

module.exports = router;
