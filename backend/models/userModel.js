const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  mobileNumber: { type: Number, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
