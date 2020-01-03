const Router = require("restify-router").Router;
const router = new Router();
const { adminModel } = require('../../models');
const jwt = require('jsonwebtoken');

router.post('/authenticate', async function (req, res, next) {
    const condition = req.body;
    if (!condition) {
        res.send(400, { message: "Credentials are required" });
        return next();
    }

    try {
        let result = await adminModel.findOne(condition);
        if (!result) {
            res.send(401, "authentication faileda");
            return next();
        }

        let { username, password } = result;
        let token = jwt.sign({ username, password }, "my-secret-key", {
            expiresIn: 20
        });

        res.send(200, { username, token });
        return next();
    }
    catch {
        res.send(500, 'Oops, something was wrong');
        return next();
    }

});



module.exports = router;
