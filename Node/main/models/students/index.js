const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const userModel = mongoose.model('students', new Schema({
    name: String,
    surname: String
}));

module.exports = { userModel };
