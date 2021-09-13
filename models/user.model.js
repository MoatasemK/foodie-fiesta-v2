const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      select: false,
    },

    newMessagePopUp: {
      type: Boolean,
      default: true,
    },
    unreadNotifications: {
      type: Boolean,
      default: false,
    },
    resetToken: {
      type: String,
    },
    expireToken: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", userSchema);
