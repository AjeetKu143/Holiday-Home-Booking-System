const Listing = require("../models/listing");

module.exports.getAllListings = async (req, res) => {
  const allListings = await Listing.find({});
  return res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewListingForm = (req, res) => {
  return res.render("listings/new.ejs");
};

module.exports.getListingDetails = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }

  return res.render("listings/show.ejs", { listing });
};

module.exports.createNewListing = async (req, res) => {
  if (!req.file) {
    req.flash("error", "Image upload failed or no file selected!");
    return res.redirect("/listings/new");
  }

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url: req.file.path, filename: req.file.filename };

  await newListing.save();
  req.flash("success", "New Listing Created!");
  return res.redirect("/listings");
};

module.exports.renderEditListingForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  return res.render("listings/edit.ejs", { listing });
};

module.exports.updateListingDetails = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file !== "undefined"){
    listing.image = { url: req.file.path, filename: req.file.filename };
    await listing.save();
  }
  req.flash("updateSuccess", "Listing Updated Successfully!");
  return res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("deleteSuccess", "Listing Deleted Successfully!");
  return res.redirect("/listings");
};
