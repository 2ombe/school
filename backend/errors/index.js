const CustomAPIError = require("./custom-api");
const UnauthenticatedError = require("./unAuthanticated");
const NotFoundError = require("./notFound");
const BadRequestError = require("./badRequest");

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
};
