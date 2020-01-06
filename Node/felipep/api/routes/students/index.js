const Router = require("restify-router").Router;
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const router = new Router();
const Students = require("../../models/Student");
const StudentSchema = require("../../models/Student");

router.get("/students", async (req, res) => {
  let students;
  try {
    await StudentSchema.find({}, (err, result) => {
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

router.post("/student/add", async (req, res) => {
  try {
    const student = new StudentSchema(req.body);
    await student.save();
    res.send(201, student);
  } catch (err) {
    res.send(500, err);
  }
  res.send(200, student);
});

router.put("/student/edit/:id", async function(req, res) {
  let rowAffected;
  try {
    const { id } = req.params;
    await StudentSchema.update({ _id: id }, req.body, (err, result) => {
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

router.del("/student/delete/:id", async (req, res) => {
  let rowAffected;
  try {
    const { id } = req.params;
    await StudentSchema.remove({ _id: id }, (err, result) => {
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
