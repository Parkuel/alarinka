const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "No Email. Please provide your email address"],
    unique: [
      true,
      "Email already exits. Already have an account? Please login.",
    ],
    lowercase: true,
    validate: [
      validator.isEmail,
      "Invalid Email address. Please provide a valid email address.",
    ],
    maxlength: [
      100,
      `Email too long. Email address must be less than 101 characters.`,
    ],
    minlength: [
      5,
      `Email too short. Email address must be greater 4 characters`,
    ],
  },
  password: {
    type: String,
    required: [true, `No password. Please provide a password.`],
    select: false,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
