const express = require("express");
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");
const Post = require("../models/post.model");
const router = express.Router();

// method: POST
// desc: Create post

router.post("/", auth, async (req, res) => {
  // const { youtube, instagram, category } = req.body;

  try {
    console.log("body", req.body);
    // let post = new Post({
    //   user: req.userId,
    //   steps: [],
    //   youtube: youtube,
    //   instagram: instagram,
    //   category: JSON.parse(category),
    // });

    // await post.save();

    // res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// method: GET
// desc: Get post

router.get("/", auth, async (req, res) => {
  try {
    const data = await Post.find({});

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
