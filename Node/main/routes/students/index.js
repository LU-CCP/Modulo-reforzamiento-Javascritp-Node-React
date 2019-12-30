const Router = require("restify-router").Router;

const router = new Router();
// ulr base/v1/students
router.get('/v1/students', function (req, res) {
    res.send(200, "Hello from students");
})

module.exports = router;
