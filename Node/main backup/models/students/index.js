const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const studentModel = mongoose.model('students', new Schema({
    name: String,
    surname: String
}));

module.exports = studentModel;
