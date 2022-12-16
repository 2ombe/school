const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middlename: { type: String },
  lastName: { type: String, required: true },
  roles: { type: String, enum: ["teacher", "doss", "displine"] },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Staff", staffSchema);
