const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = Schema({
  user: String,
  password: String
});

module.exports = mongoose.model("admin", AdminSchema);
