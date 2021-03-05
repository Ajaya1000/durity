var mongoose = require('mongoose');
var chapterSchema = require('./chapter');
const subjectSchema = new mongoose.Schema({
  name: String,
  chapters: [chapterSchema],
});

//add methods here

Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
