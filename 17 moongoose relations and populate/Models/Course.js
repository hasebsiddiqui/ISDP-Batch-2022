const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: String,
  duration: { type: Number, default: 5 },
  author: {},
  authorRelation: { type: mongoose.ObjectId, ref: "Author" },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
