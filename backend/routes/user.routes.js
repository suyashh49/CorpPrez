const express = require("express");
const router = express.Router();
const { updateProfile, getProfile } = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/me", auth, getProfile);
router.post("/complete-registration", auth, updateProfile);

module.exports = router;
