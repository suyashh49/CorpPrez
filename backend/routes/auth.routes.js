// backend/src/routes/auth.routes.js
const express = require("express");
const passport = require("passport");
const { googleAuth, googleCallback } = require("../controllers/auth.controller");
const router = express.Router();

// Kick off OAuth
router.get("/google", googleAuth(passport));

// Callback endpoint
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

module.exports = router;
