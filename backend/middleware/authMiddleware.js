const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(422).json({ error: "you must login first" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.UMWIHARIKO);
    //attach user to the route
    (req.user = { userId: payload.userId }), payload.name;
    next();
  } catch (error) {
    res.status(401).json({ error: "not authorised please login" });
  }
};
module.exports = auth;
