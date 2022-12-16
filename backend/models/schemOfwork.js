const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  academivyear: { type: Date, required: true },
  term: { type: String, required: true },
  school: { type: String, required: true },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  periods: { type: String, required: true },
  teacher: { type: mongoose.Types.ObjectId, ref: "Staff", required: true },
  weeks: { type: Number, required: true },
  from: { type: Date, default: Date.now, required: true },
  to: { type: Date, required: true },
  periods: { type: String, required: true },
  unit: { type: String, required: true },
  knowledge: { type: Array, required: true },
  skills: { type: Array, required: true },
  values: { type: Array, required: true },
  teachingMethods: { type: Array, required: true },
  resources: { type: Array, required: true },
  observations: { type: Array, required: true },
  evaluation: { type: String, required: true },
  procedures: { type: String, required: true },
  comments: { type: Array, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "Staff" },
});

module.exports = mongoose.model("Schema", workSchema);
