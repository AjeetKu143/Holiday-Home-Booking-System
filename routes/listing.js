const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } });

const {
  isLoggedIn,
  isOwner,
  validateListing
} = require("../middleware.js");

const {
  getAllListings,
  renderNewListingForm,
  getListingDetails,
  createNewListing,
  renderEditListingForm,
  updateListingDetails,
  deleteListing
} = require("../controllers/listings.js");

// Index and Create Routes
router
  .route("/")
  .get(wrapAsync(getAllListings))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,                  // move this first
    wrapAsync(createNewListing)
  );

// New Listing Form Route
router.get("/new", isLoggedIn, wrapAsync(renderNewListingForm));

// Show, Update, and Delete Routes for a specific listing
router
  .route("/:id")
  .get(wrapAsync(getListingDetails))
  .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(updateListingDetails))
  .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));

// Edit Form Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditListingForm));

module.exports = router;
