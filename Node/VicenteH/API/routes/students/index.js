const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentSchema);
//url base
router.get("/v1/students", async function(req, res) {
  let students;
  await userModel.find({}, function(err, result) {
    if (err) console.log(err);
    console.log("students", result);
    students = result;
  });
  res.send(200, students);
});

router.del("/v1/students:surname", async function(req, res) {
  let students;
  let surnames = req.params;
  await userModel.deleteOne({ surname: surnames }, function(err) {
    if (err) return handleError(err);
    // deleted at most one tank document
  });
  res.send(200, students);
});

router.put("/v1/students", async function(req, res) {
  let students;
  await userModel.updateOne(
    { surname: "Troll" },
    { surname: "Aguayo" },
    function(err, res) {
      if (err) return handleError(err);
      // deleted at most one tank document
    }
  );
  res.send(200, students);
});

module.exports = router;
