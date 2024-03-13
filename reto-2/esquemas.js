
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://dbRafa:Miisima79@cluster0.z4gwgkn.mongodb.net/students')


// Esquema para 'teachers'
const teacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  groups: [String]
});


// Esquema para 'subjects'
const subjectSchema = new mongoose.Schema({
  title: String,
  teachers: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Teacher'
  }],
});


// Esquema para 'marks'
const markSchema = new mongoose.Schema({
  subjects: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Subject'
  },
  mark: Number,
  date: Date
});


// Esquema para 'students'
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  marks: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Mark'
  }],
});



// Exporto esquemas
module.exports = {
  Teacher: mongoose.model('Teacher', teacherSchema),
  Subject: mongoose.model('Subject', subjectSchema),
  Student: mongoose.model('Student', studentSchema),
  Mark: mongoose.model('Mark', markSchema)
};