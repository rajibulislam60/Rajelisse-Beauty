const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "user type is require"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "user type is require"],
      unique: [true, "user type is unique, Allready have."],
      trim: true,
    },
    phone: {
      type: Number,
      require: [true, "user type is require"],
      trim: true,
    },
    address: {
      type: String,
      require: [true, "user type is require"],
    },
    usertype: {
      type: String,
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://wallpapers.com/images/high/anime-girls-pfp-pink-hair-b18tfcqwarpblq60.webp",
    },
    password: {
      type: String,
      require: [true, "user type is require"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
