const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  myPost,
} = require("../controllers/post");

router.route("/").post(createPost).get(getAllPost);
router.route("/:id").get(getSinglePost).patch(updatePost).delete(deletePost);
router.route("/mypost").get(myPost);

module.exports = router;
