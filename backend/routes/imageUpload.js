const express = require("express");
const { cloudinary } = require("cloudinary");
const streamifier = require("streamifier");
const multer = require("multer");
const router = express.Router();

const postImage = multer();

router.post(
  "/",

  postImage.single("file"),
  async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.envCLOUD_API_KEY,
      api_secret: process.env.CLOUD_SECRET_KEY,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.status(200).json(result);
  }
);

module.exports = router;
