const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const router = express.Router();

const User = require("../models/user.model");

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

router.get("/:username", async (req, res) => {
  const username = req.params.username;

  try {
    if (username.length < 1) return res.status(401).json({ msg: "Invalid" });

    if (!usernameRegex.test(username))
      return res.status(401).json({ msg: "Invalid" });

    const user = await User.findOne({ username: username.toLowerCase() });

    if (user) return res.status(401).send("username already taken");

    return res.status(200).json({ msg: "Username available" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    if (password.length < 6) {
      return res.status(401).send("Password should be greater than 6");
    }

    let user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return res.status(401).send("User exists");
    }

    user = new User({
      name,
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password,
    });

    user.password = await bcrypt.hash(password, 10);

    await user.save();

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "3d",
      },
      (err, token) => {
        if (err) throw err;

        res.status(200).json(token);
      }
    );
  } catch (err) {
    console.log(err);
    console.log("server error");
  }
});

module.exports = router;
