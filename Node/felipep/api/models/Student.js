const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  surname: String
});

module.exports = mongoose.model("students", StudentSchema);
