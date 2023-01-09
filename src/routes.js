const express = require("express");
const router = express.Router();

// Middlewares
const Authentication = require("./app/middleware/Auth");

// useCases
const userLogin = require("./app/useCases/Users/UserLogin");
const userCreate = require("./app/useCases/Users/UserCreate");
const postCreate = require("./app/useCases/Posts/PostCreate");

// User Routes
router.post("/api/user/login", userLogin);
router.post("/api/user", userCreate);

// Posts Routes
router.post("/api/post", postCreate /*Authentication, */);

module.exports = router;
