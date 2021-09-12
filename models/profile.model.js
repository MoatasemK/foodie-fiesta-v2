const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    bio: {
      type: String,
      required: true,
    },
    profilePicUrl: {
      type: String,
    },
    social: {
      youtube: {
        type: String,
      },
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Profile = mongoose.model("Profile", profileSchema);
