const Router = require("restify-router").Router;
const { userModel } = require('../../models');
const router = new Router();

router.get('/students', async function (req, res) {
    let students;
    try {
        await userModel.find({}, function (err, result) {
            if (err) {
                console.log(err);
            }
            students = result;
        })
    } catch (err) {
        console.log(err);
    }

    res.send(200, students);
});

router.post('/students', function (req, res) {
    console.log(req.body)
    res.send(200, "");
});

module.exports = router;
