const expressAsyncHandler = require("express-async-handler");
const generatewebToken = require("../../utils/generateToken");
const User = require("../models/userModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res
      .status(201)
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generatewebToken(user._id),
      })
      .send("Registered successfully");
  } else {
    res.status(400);
    throw new Error("Error Occured!!");
  }
});

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generatewebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUser };
