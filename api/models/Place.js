const slugify = require("slugify");
const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: { type: String, required: [true, "A place must have a title."] },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String, required: [true, "Invalid address."] },
  photos: [String],
  description: String,
  perks: [
    {
      type: String,
      enum: ["wifi", "parking", "tv", "pets", "food", "entrance"],
    },
  ],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
  slug: {
    type: String,
    unique: [true, "This title already exits."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

placeSchema.index({ slug: 1 });

placeSchema.pre("save", async function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
