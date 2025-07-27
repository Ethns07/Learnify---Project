const express = require("express");
const {
  register,
  login,
  getMe,
  protect,
  restrictTo,
  getAllUsers,
} = require("../controllers/authController");

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/me", protect, getMe);

// Admin only routes
router.get("/users", protect, restrictTo("admin"), getAllUsers);

module.exports = router;
