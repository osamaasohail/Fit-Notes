const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  refUser: {type: mongoose.Schema.Types.ObjectId},
  name: { type: String, required: true },
  role: { type: Number, required: true }, // type: 1 for individual, type: 2 for business
  licenseNumber: { type: String, required: true },
  expiryDate: { type: Date, default: false },
  dutyManagers: [{
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    expiryDate: {
      type: Date,
      required: true
    }
  }],
  gamingLicense: { type: String},
  gamingLicenseExpiry: {type: Date},
  sendNotiBeforeExpiry: {type: Number} // in days
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);