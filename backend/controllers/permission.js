const Permission = require("../models/permission");

const createPermission = async (req, res) => {
  const { firstName, middleName, lastName, reason, from, to } = req.body;
  try {
    const newPermissin = await Permission.create({
      firstName,
      middleName,
      lastName,
      reason,
      from,
      to,
      parent: req.user,
    });
    res.status(200).json(newPermissin);
  } catch (error) {
    console.log(error);
  }
};

const getuserPermission = async (req, res) => {
  try {
    res.send("dark");
  } catch (error) {}
};

module.exports = {
  createPermission,
};
