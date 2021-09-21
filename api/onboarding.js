const express = require("express");
const crypto = require("crypto");
const auth = require("../middleware/auth.middleware");
const User = require("../models/user.model");
const Profile = require("../models/profile.model");
const upload = require("../middleware/upload.middleware");
const router = express.Router();

router.post("/:token", upload.single("profilePic"), async (req, res) => {
  try {
    const token = req.params.token;

    const { bio, youtube, instagram, facebook } = req.body;

    const verificationToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({ verificationToken });
    if (!user) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    if (req.file) user.profilePicUrl = req.file.path;
    await user.save();

    let profileFields = {
      user: req.userId,
      bio: bio,
      socials: {
        youtube: youtube,
        instagram: instagram,
        facebook: facebook,
      },
    };

    let profile = new Profile(profileFields);

    await profile.save();
    return res.status(200).json({ msg: "Profile create successfully" });
  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
