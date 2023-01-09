const express = require("express");
const router = express.Router();

// Middlewares
const Authentication = require("./app/middleware/Auth");

// ############## useCases ###############

// Posts - useCases
const postCreate = require("./app/useCases/Posts/PostCreate");
const postListByUserId = require("./app/useCases/Posts/PostListByUserId");
// Users - useCases
const userLogin = require("./app/useCases/Users/UserLogin");
const userCreate = require("./app/useCases/Users/UserCreate");

// ############ Routes ##############

// Posts Routes
router.get("/api/user/post", postListByUserId /*Authentication, */);
router.post("/api/post", postCreate /*Authentication, */);

// User Routes
router.post("/api/user/login", userLogin);
router.post("/api/user", userCreate);

module.exports = router;
