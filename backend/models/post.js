const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide a title"],
    },
    body: {
      type: String,
      required: [true, "Fill the body"],
    },
    photo: {
      type: String,
      default: "no photo",
    },
    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
