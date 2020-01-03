const Router = require("restify-router").Router;
const { studentModel } = require("../../models");
const router = new Router();

router.get("/students", async function(req, res) {
  let students;
  try {
    await studentModel.find({}, function(err, result) {
      if (err) {
        console.log(err);
      }
      students = result;
    });
  } catch (err) {
    res.send(500, err);
  }
  res.send(200, students);
});

router.post("/students", async function(req, res) {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(201, student);
  } catch (err) {
    res.send(500, err);
  }
  res.send(200, student);
});

router.put("/students", async function(req, res) {
  let rowAffected;
  try {
    const { conditions, document } = req.body;
    await studentModel.updateOne(conditions, document, function(err, result) {
      if (err) {
        res.send(500, err);
      }
      rowAffected = result;
    });
    res.send(200, rowAffected);
  } catch (err) {
    res.send(500, err);
  }
});

router.del("/students", async function(req, res) {
  let rowAffected;
  try {
    const { conditions } = req.body;
    await studentModel.deleteOne(conditions, function(err, result) {
      if (err) {
        res.send(500, err);
      }
      rowAffected = result;
    });
    res.send(200, rowAffected);
  } catch (err) {
    res.send(500, err);
  }
});

module.exports = router;
