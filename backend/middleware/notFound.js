const notFoundMiddleware = (req, res) =>
  res.status(404).send("route doesn't exist");
module.exports = notFoundMiddleware;
