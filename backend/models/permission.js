const mongoose = require("mongoose");

const permissinSchema = new mongoose.Schema({
  childInfo: {
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
  },
  reason: {
    type: String,
    required: true,
  },
  from: { type: Date, default: Date.now, required: true },
  to: { type: Date, default: Date, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Permission = mongoose.model("Permission", permissinSchema);
module.exports = Permission;
