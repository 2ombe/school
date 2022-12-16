const express = require("express");
const router = express.Router();
const { createLesson, getLesson } = require("../controllers/lessonPlan");

router.route("/").post(createLesson).get(getLesson);

module.exports = router;
