const mongoose = require("mongoose");

const schoolShema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: [
    {
      country: { type: String, required: true },
      city: { type: String, required: true },
      province: { type: String },
      district: { type: String },
      village: { type: String },
      sector: { type: String },
    },
  ],
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String },
});

module.exports = mongoose.Model("School", schoolShema);
