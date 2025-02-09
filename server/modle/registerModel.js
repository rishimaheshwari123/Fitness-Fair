const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: { type: String, },
  email: { type: String, },
  phone: { type: String, },
  city: { type: String, },
  occupation: { type: String, },
  stallCategory: { type: String, },
}, { timestamps: true });

module.exports = mongoose.model('Register', registerSchema);
