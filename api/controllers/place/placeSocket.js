const fs = require("fs");
const util = require("util");
const delFile = util.promisify(fs.unlink);
const Place = require("../../models/Place");
const timeManager = require("../../utilities/TimeManager");

exports.createPlace = async (socket, queryObj) => {
  try {
    const { title, address, price, checkIn, checkOut, maxGuests, owner } =
      queryObj;
    queryObj.checkIn = timeManager.timeToNumber(checkIn);
    queryObj.checkOut = timeManager.timeToNumber(checkOut);

    if (!(title && address && price && checkIn && checkOut && maxGuests))
      throw new Error(
        "Incomplete details. Please fill all the required fields of the form"
      );

    const newPlace = await Place.create(queryObj);
    socket.broadcast.emit("new update", newPlace);
    socket.emit("created new place");
  } catch (err) {
    socket.emit("create place error", {
      status: "error",
      message: err.message,
    });
  }
  return;
};

exports.deletePlace = async function (socket, placeData) {
  try {
    const { owner, _id, title } = placeData;
    const deletedPlace = await Place.findOneAndDelete({ _id, owner });
    if (!deletedPlace) socket.emit("deleted my place", placeData);
    if (Array.isArray(deletedPlace?.photos)) {
      deletedPlace.photos.forEach((photo) => {
        const filePath = `./${photo}`;
        delFile(filePath).catch((err) => {
          console.error("Error deleting the Image:", err);
        });
      });
    }

    socket.broadcast.emit("new place delete", deletedPlace);
    socket.emit("deleted my place", deletedPlace);
  } catch (err) {
    socket.emit("deleting failure", deletedPlace);
  }
};
