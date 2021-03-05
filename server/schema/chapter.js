var mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  name: String,
  description: String,
});

//add methods here
// chapterSchema.pre('save', (next) => {
//   if ('invalid' == this.name) {
//     return next(new Error('this.Error'));
//   }
// });

module.exports = chapterSchema;
