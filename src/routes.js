const express = require("express");
const router = express.Router();

// Middlewares
const Authentication = require("./app/middleware/Auth");

// useCases
const postCreate = require("./app/useCases/Posts/PostCreate");
const postList = require("./app/useCases/Posts/PostList");
const userLogin = require("./app/useCases/Users/UserLogin");
const userCreate = require("./app/useCases/Users/UserCreate");

// Posts Routes
router.get("/api/post" /*Authentication, */);
router.post("/api/post", postCreate /*Authentication, */);

// User Routes
router.post("/api/user/login", userLogin);
router.post("/api/user", userCreate);

module.exports = router;
