const Post = require("../models/post");

// create post

const createPost = (req, res) => {
  const { body, title } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Please fill all required fields" });
  }
  const post = new Post({
    title,
    body,
    postedBy: req.user.userId,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });

  //  const post = new Post
};

// get all the post
const getAllPost = async (req, res) => {
  const posts = await Post.find({ postedBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(200).json({ posts, count: posts.count });
};
// // get user post
const myPost = (req, res) => {
  Post.find({ postedBy: req.user.userId })
    .populate("postedBy", "userId name")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
};
// // get all posts
const getSinglePost = (req, res) => {
  res.send("posted by me");
};
const updatePost = (req, res) => {
  res.send("update");
};
const deletePost = (req, res) => {
  res.send("delete all post");
};

module.exports = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  myPost,
};
