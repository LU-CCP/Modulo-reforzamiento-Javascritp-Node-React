const Router = require('restify-router').Router;
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const studentSchema = new Schema({
    name: String,
    surname: String
})
const router = new Router();
const userModel = mongoose.model('students', studentSchema);
const Students = require("../../models/students");

router.get('/v1/students', async (req, res) => {
    let students = '';
    await userModel.find({}, (err, result) => {
        if (err) {
            console.log(err);
        }
        students = result;
        console.log('students', result);
    })
    res.json(200, students);
});

router.post("/v1/add", async (req, res, next) => {
  const student = new Students(req.body);
  await student.save();
  res.json(200, "Agregado");
});

router.post("/v1/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  await Students.update({ _id: id }, req.body);
  res.json(200, "Actualizado");
});

router.get("/v1/delete/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
      await Students.remove({ _id: id });
  } catch (error) {
      res.send(500, {message:error});
  }
  res.json(200, "Borrado");
});

module.exports = router;