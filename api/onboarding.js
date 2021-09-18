const express = require("express");
const auth = require("../middleware/auth.middleware");
const Profile = require("../models/profile.model");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { bio, youtube, instagram, facebook } = req.body;

    let profile = await Profile.findOne({ user: req.userId });

    if (profile) {
      return res.status(400).json({ msg: "Profile exists" });
    }

    profile = new Profile({
      user: req.userId,
      bio: bio,
      socials: {
        youtube: youtube,
        instagram: instagram,
        facebook: facebook,
      },
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
