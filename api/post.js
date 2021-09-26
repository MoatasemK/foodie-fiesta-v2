const express = require("express");
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");
const Post = require("../models/post.model");
const router = express.Router();

// method: POST
// desc: Create post

router.post("/", auth, upload.array("images", 5), async (req, res) => {
  const { title, youtube, instagram, description, category } = req.body;

  try {
    if (req.files.length < 1) {
      return res.status(400).json({ msg: "Please upload at least 1 image" });
    }

    let post = new Post({
      user: req.userId,
      title: title,
      youtube: youtube,
      instagram: instagram,
      description: description,
      category: JSON.parse(category),
      images: req.files.map((file) => file.path),
    });

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
