const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const adminModel = mongoose.model(
  "admins",
  new Schema({
    username: String,
    password: String
  })
);

module.exports = { adminModel };
