const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users.js");

// Signup Routes
router.route("/signup")
  .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signupUser)
);

// Login Routes
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true
    }),
    userController.loginUser
);

// Logout Route
router.get("/logout", userController.logoutUser);

module.exports = router;
