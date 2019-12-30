const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const BodyParser = require("body-parser");
var url = "mongodb://localhost/leoDB";
//var Tank = mongoose.model("Tank", schema);

const studentsSchema = new Schema({
  name: String,
  surname: String
});

const router = new Router();
const userModel = mongoose.model("students", studentsSchema);

// url base/v1/students

router.get("/v1/students", async function(req, res) {
  let students;
  await userModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    students = result;
    console.log("students", result);
  });
  res.send(200, students);
});

router.post("/v1/studentsAdd", async function(req, res) {
  let data = req.body;

  res.send(200, "listo");
});

router.get("/v1/students/delete/:name", async (req, res) => {
  const { params } = req;
  let response;
  await userModel.findOneAndRemove(params, function(err, resp) {
    console.log(resp);
    if (err) {
      console.log(err);
    }
    response = resp.deletedCount;
  });
  if (response == 0) {
    res.send(400, "no encontrado");
  } else {
    res.send(200, " eliminado");
  }
});
/*router.post("/students/insert", function(req, res, next) {
  var item = {
    name: req.body.firstName,
    surname: req.body.lastName
  };
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection("student").insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log("item has been inserted");
      db.close;
    });
  });
  res.send("listo!");
});
*/
module.exports = router;
