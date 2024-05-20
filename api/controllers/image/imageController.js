const fs = require("fs");
const catchAsync = require("../../utilities/catchAsync");

const readSendImage = function (path, res) {
  fs.readFile(path, (err, data) => {
    if (err) return res.status(404).send("Image not found.");
    res.contentType("image/jpeg");
    res.send(data);
  });
};

exports.getImage = catchAsync(async (req, res, next) => {
  const { folder, filename } = req.params;
  const path = `${folder}/${filename}`;
  readSendImage(path, res);
});
