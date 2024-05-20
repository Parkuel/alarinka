const imageDownloader = require("image-downloader");

const { multerStorage, multerFilter } = require("./helper");
const catchAsync = require("../../utilities/catchAsync");
const AppError = require("../../utilities/AppError");
const multer = require("multer");
const { urlToImage } = require("../../utilities/helpers");

exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImage = catchAsync(async (req, res) => {
  const uploadedFiles = [];
  req.files?.forEach((img) => uploadedFiles.push(`uploads/${img.filename}`));

  res.status(200).json({
    status: "success",
    uploadedFiles,
  });
});

exports.uploadImageViaLink = catchAsync(async (req, res, next) => {
  const { link } = req.body;
  const newName = "uploads/photo" + Date.now() + ".jpg";

  try {
    if (link.startsWith("data:")) {
      urlToImage(link, newName);
      return res.status(200).json(newName);
    }

    const options = {
      url: link,
      dest: `../../${newName}`,
    };
    await imageDownloader.image(options);
  } catch (err) {
    console.log(err);
    return next(new AppError("Invalid Image url.", 402));
  }
  res.json(newName);
});

exports.getProfile = catchAsync(async (req, res, next) => {
  const user = req?.user || undefined;
  return res.status(200).json({
    status: "success",
    user,
  });
});
