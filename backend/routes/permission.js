const express = require("express");
const { createPermission } = require("../controllers/permission");
const router = express.Router();

router.route("/").post(createPermission);

module.exports = router;
