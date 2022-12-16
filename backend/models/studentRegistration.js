const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },

  birth: {
    type: Date,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  files: {
    type: String,
  },
  currentSchool: {
    type: String,
  },
  parentName: {
    type: mongoose.Types.ObjectId,
    ref: "Parent",
  },
});

module.exports = mongoose.model("Register", registerSchema);
