const express = require("express");
const { checkEmail } = require("../controllers/APIs/usersApiController");
const router = express.Router();

/* API */

router
    .get("/check-email", checkEmail);

module.exports = router;