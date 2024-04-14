const express = require("express");
const { signup, signin, logout } = require("../controllers/authController");
const router = express.Router();

//auth routes
// router.get("/", signin);

// signup route
router.post("/signup", signup);

// signin route
router.post("/signin", signin);
// /api/logout
router.get("/logout", logout);

module.exports = router;
