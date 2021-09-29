const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    steps: [
      {
        title: {
          type: String,
          required: true,
        },
        image: {
          type: String,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    youtube: {
      type: String,
    },
    instagram: {
      type: String,
    },
    category: {
      type: [String],
      required: true,
    },
    likes: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
        profilePic: String,
      },
    ],
    comments: [
      {
        _id: { type: String, require: true },
        text: {
          type: String,
          required: true,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
        profilePic: String,
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Post = mongoose.model("Post", postSchema);
