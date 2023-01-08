const express = require("express");
const router = express.Router();

// useCases
const userLogin = require("./app/useCases/Users/UserCreate");

// Route Users
router.post("/api/createUser", userLogin);

module.exports = router;
