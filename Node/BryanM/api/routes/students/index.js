const mongoose = require("mongoose");
const Router = require("restify-router").Router;
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  name: String,
  surname: String
});
const router = new Router();
const useModel = mongoose.model("students", studentSchema);

router.get("/v1/students", function(request, response) {
  console.log(request.body);
  useModel.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log("students", result);
    response.send(result);
  });
});

//AGREGAR
router.post("/v1/students/", async function(request, response) {
  const { name, surname } = request.body;
  let student = new useModel({ name, surname });
  let results;

  await student.save(function(error, student) {
    if (error) {
      console.log(error);
    }
    results = student;
  });

  response.send(200, "Agregado correctamente!");
});

router.del("/v1/students/:name", async function(request, response) {
  await useModel.deleteOne({ name: request.params.name }),
    function(err) {
      if (err) console.log(err);
    };
  response.send("Eliminado correctamente");
});

router.put("/v1/students/:id", async (request, response) => {
  const { Name, Surname } = request.body;
  console.log(request.body);
  console.log(request.params.id);
  await useModel.updateOne(
    { id: request.params.id },
    { name: Name, surname: Surname },
    function(err, res) {
      if (err) {
        console.log(err);
      }
      response.send("Actualizado correctamente", res);
    }
  );
});

module.exports = router;
