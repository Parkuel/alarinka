const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking/bookingController");

router.route("/:owner").get(bookingController.getAllBookings);
router.route("/").patch(bookingController.updateStatus);

module.exports = router;
