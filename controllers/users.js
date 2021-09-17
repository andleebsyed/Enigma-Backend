const { User } = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSignUp = async (req, res) => {
  try {
    const secret = process.env.SECRET;

    const { userDetails } = req.body;

    const newUser = new User(userDetails);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: savedUser._id }, secret, {
      expiresIn: "24h",
    });
    res.json({
      status: true,
      message: "user added successfully",
      token,
      username: newUser.username,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.json({
        status: false,
        code: 11000,
        message: "couldn't add user",
        errorDetail: error.message,
        existingField: Object.keys(error.keyPattern)[0],
      });
    }
    res.json({
      status: false,
      message: "couldn't add user",
      errorDetail: error.message,
    });
  }
};

const UserSignIn = async (req, res) => {
  try {
    const secret = process.env.SECRET;
    const { userDetails } = req.body;
    const ourUser = await User.findOne({ username: userDetails.username });
    if (ourUser) {
      const validPassword = await bcrypt.compare(
        userDetails.password,
        ourUser.password
      );
      if (validPassword) {
        const token = jwt.sign({ userId: ourUser._id }, secret, {
          expiresIn: "24h",
        });
        res.json({
          status: true,
          allowUser: true,
          message: "logged in successfully",
          token,
          username: userDetails.username,
        });
      } else {
        res.json({
          status: true,
          allowUser: false,
          message: "username and/or password incorrect",
        });
      }
    } else {
      res.json({
        status: true,
        allowUser: false,
        message: "username and/or password incorrect",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      message: "Couldn't sign In",
      errorDetail: error.message,
    });
  }
};

const GuestAccess = async (req, res) => {
  try {
    console.log("cming here");
    const secret = process.env.SECRET;
    const userId = mongoose.Types.ObjectId("6143715cb9a36d0022d122c9");
    const ourUser = await User.findById(userId);
    // console.log({ ourUser });
    const token = jwt.sign({ userId: ourUser._id }, secret, {
      expiresIn: "24h",
    });
    // console.log({ token });
    res.json({
      status: true,
      allowUser: true,
      message: "logged in successfully",
      token,
      username: ourUser.username,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Couldn't sign In",
      errorDetail: error.message,
    });
  }
};
module.exports = { UserSignUp, UserSignIn, GuestAccess };
