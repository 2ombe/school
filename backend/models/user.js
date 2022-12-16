const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the name "],
  },

  email: {
    type: String,
    required: [true, "your email is required"],
  },
  password: {
    type: String,
    required: [true, "provide your password"],
  },
  isParent: { type: Boolean, default: true, required: true },
  isOwner: { type: Boolean, default: false },
  isDirector: { type: Boolean, default: false },
  isDispline: { type: Boolean, default: false },
  isHeadTeacher: { type: Boolean, required: false },
  isTeacher: { type: Boolean, default: false },
});

userSchema.methods.getData = () => {
  return this.name, this.email;
};

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.UMWIHARIKO,
    {
      expiresIn: "30d",
    }
  );
};

userSchema.methods.checkPassword = async function (ownerPassword) {
  const doMatch = await bcrypt.compare(ownerPassword, this.password);
  return doMatch;
};

module.exports = mongoose.model("User", userSchema);
