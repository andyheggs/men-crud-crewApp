const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgencySchema = new Schema({
  name: { type: String, required: true },
  profileLoginUrl: { type: String, required: true },
  agentName: { type: String },
  agentEmail: { type: String },
  agentTelNo: { type: String },
  streetAddress: { type: String },
  city: { type: String },
  country: { type: String },
  contactNumber: { type: String },
  operatingHours: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
});

module.exports = mongoose.model('Agency', AgencySchema);
