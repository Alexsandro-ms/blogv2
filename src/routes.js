const express = require("express");
const router = express.Router();

// useCases
const userLogin = require("./app/useCases/Users/UserCreate");

// Route Users
router.post("/api/user", userLogin);

module.exports = router;
