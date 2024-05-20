const Booking = require("../../models/BookingModel");
const catchAsync = require("../../utilities/catchAsync");
const AppError = require("../../utilities/AppError");

exports.getAllBookings = catchAsync(async (req, res, next) => {
  const { owner } = req.params;
  if (!owner)
    return res.status(200).json({
      status: "success",
      bookings: [],
    });

  const allBookings = await Booking.find({ owner })
    .populate("booker")
    .populate("place");

  res.status(200).json({
    status: "success",
    bookings: allBookings,
  });
});

exports.updateStatus = catchAsync(async (req, res, next) => {
  const { status, bookingId } = req.body;

  if (status === "accepted") {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "accepted" },
      { new: true }
    )
      .populate("booker")
      .populate("place");
    return res.status(200).json({
      status: "success",
      booking,
    });
  } else {
    await Booking.deleteOne({ _id: bookingId });
    return res.status(200).json({
      status: "success",
    });
  }
});

// exports.getBooking = catchAsync(async (req, res, next) => {
//   const { owner } = req.params;
//   const booking = await Booking.findOne({ owner }).populate("booker").populate('place');
//   res.status(200).json({
//     status: "success",
//     booking,
//   });
// });
