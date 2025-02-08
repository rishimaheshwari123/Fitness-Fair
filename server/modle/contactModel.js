const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String,  },
  email: { type: String,   },
  contact: { type: String,  },
  dob: { type: String,  },
  priceCategory: { type: String,  }, // Changed to string
  price: { type: Number,  },
  size: { type: String,  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
