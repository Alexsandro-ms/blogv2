const express = require("express");
const router = express.Router();

// useCases
const userLogin = require("./app/useCases/Users/UserLogin");
const userCreate = require("./app/useCases/Users/UserCreate");
// Middlewares
const Authentication = require("./app/middleware/Auth");

// Route Users
router.post("/api/user/login", userLogin);
router.post("/api/user", userCreate);

module.exports = router;
