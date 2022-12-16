const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(422).json({ error: "Please chose a different email" });
    }
  });
  const savedUser = await User.create({ ...req.body });
  const token = savedUser.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ message: "successfully registered", token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).json({ error: "Please provide email and password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
  }

  const doMatch = await user.checkPassword(password);
  if (!doMatch) {
    res.status(422).json({ error: "Invalid credentials" });
  }

  const token = user.createJWT();
  res.status(200).json({ user: { user: user.name, email: user.email }, token });
};

module.exports = {
  login,
  register,
};
