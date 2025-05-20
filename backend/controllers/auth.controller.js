// backend/src/controllers/auth.controller.js
const jwt = require("jsonwebtoken");

/**
 * Initiates Google OAuth flow.
 * (You can also call this directly from a controller if you prefer
 *  routes to stay thin, e.g. router.get("/google", googleAuth).)
 */
exports.googleAuth = (passport) => passport.authenticate("google", {
  scope: ["profile", "email"],
});

/**
 * Google OAuth callback handler.
 * Passport has already attached `req.user` (our Sequelize User instance).
 * We now issue a JWT and redirect back to the front end.
 */
exports.googleCallback = (req, res) => {
  // req.user: { id, email, fullName, organization, role, ... }
  const payload = {
    id: req.user.id,
    email: req.user.email,
    role: req.user.role,
    organization: req.user.organization,
    fullName: req.user.fullName,
    phone: req.user.phone,
  };

  // Sign a token valid for 24h
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Redirect back to your React app with the token in query
  res.redirect(
    `${process.env.FRONTEND_URL}/auth/success?token=${encodeURIComponent(token)}`
  );
};
