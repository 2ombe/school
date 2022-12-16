const Schema = require("../models/schemOfwork");

const createWork = async (req, res) => {
  const work = req.body;
  const newWork = await Schema.create(work);
  res.status(200).json(newWork);
};

module.exports = {
  createWork,
};
