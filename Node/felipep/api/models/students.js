const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = Schema({
  name: String,
  surname: String
});

module.exports = mongoose.model("student", StudentSchema);
