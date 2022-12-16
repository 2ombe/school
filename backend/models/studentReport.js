const mongoose = require("mongoose");

const reportShema = new mongoose.Schema({
  studentNames: { type: mongoose.Types.ObjectId, ref: "Parent" },
  mistakes: { type: Number },
  news: { type: String, required: true, min: 7, max: 50 },
  subject: { type: String },
  marks: { type: Number },
});

module.exports = mongoose.model("Report", reportShema);
