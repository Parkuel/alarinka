const express = require("express");
const router = express.Router();

const placeController = require("../controllers/place/placeController");
const authController = require("../controllers/auth/authController");

router.route("/").get(placeController.getAllPlaces);
router.route("/detail/:slug").get(placeController.getPlace);
router
  .route("/mine/:userId")
  .get(authController.isLoggedIn, placeController.getListings);

module.exports = router;
