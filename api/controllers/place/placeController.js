const Place = require("../../models/Place");
const catchAsync = require("../../utilities/catchAsync");
const AppError = require("../../utilities/AppError");

exports.getAllPlaces = catchAsync(async (req, res, next) => {
  const allPlaces = await Place.find().sort({
    createdAt: -1,
  });
  res.status(200).json({
    status: "success",
    places: allPlaces,
  });
});

exports.getPlace = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const place = await Place.findOne({ slug }).populate("owner");
  res.status(200).json({
    status: "success",
    place,
  });
});

exports.getListings = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const places = await Place.find({ owner: userId });
  return res.status(200).json({
    status: "success",
    places,
  });
});
