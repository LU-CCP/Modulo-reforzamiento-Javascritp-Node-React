const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const adminsModel = mongoose.model(
  "admins",
  new Schema({
    username: String,
    pass: String
  })
);

module.exports = adminsModel;
