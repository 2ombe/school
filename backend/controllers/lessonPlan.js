const asyncHandler = require("express-async-handler");
const Lesson = require("../models/lessonPlan");

const createLesson = asyncHandler(async (req, res) => {
  const myLesson = Lesson.create(req.body);

  res.status(200).json(myLesson);
});

const getLesson = asyncHandler(async (req, res) => {
  const myLesson = await Lesson.find();
  res.status(200).json(myLesson);
});

module.exports = {
  createLesson,
  getLesson,
};
