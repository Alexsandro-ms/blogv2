const express = require("express");
const router = express.Router();
// Middlewares
const authorization = require("./app/middleware/Auth");

// ############## useCases ###############

// Posts - useCases
const postCreate = require("./app/useCases/Posts/PostCreate");
const postListByUserId = require("./app/useCases/Posts/PostListByUserId");
// Users - useCases
const userLogin = require("./app/useCases/Users/UserLogin");
const userCreate = require("./app/useCases/Users/UserCreate");

// ############ Routes ##############

// Posts Routes
router.get("/api/user/post", authorization, postListByUserId);
router.post("/api/post", authorization, postCreate);

// User Routes
router.post("/api/user/login", userLogin);
router.post("/api/user", userCreate);

module.exports = router;
