const express = require("express");
const { createWork } = require("../controllers/schemOfwork");
const router = express.Router();

router.route("/").post(createWork);

module.exports = router;
