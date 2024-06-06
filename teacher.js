const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    salary: Number,
    active: Boolean,
    date_of_birth: Date,
    father_name: String,
    class_teacher: String
});

module.exports = mongoose.model('teacher',teacherSchema);