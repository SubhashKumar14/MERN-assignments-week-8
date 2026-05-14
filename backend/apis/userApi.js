const express = require('express');
const User = require('../models/userModel');
const userApp = express.Router();

// GET all users
userApp.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ message: "Users fetched successfully", payload: users });
  } catch (err) {
    console.error("Error in fetching users", err);
    res.status(500).send({ message: "Error in fetching users", error: err.message });
  }
});

// POST new user
userApp.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: "User created successfully", payload: newUser });
  } catch (err) {
    console.error("Error creating user", err);
    res.status(500).send({ message: "Error creating user", error: err.message });
  }
});

module.exports = userApp;
