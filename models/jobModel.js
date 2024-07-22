const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  referenceNumber: { type: String },
  closingDate: { type: Date },
  status: { type: String },
  notes: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  agency: { type: Schema.Types.ObjectId, ref: 'Agency' },
  platform: { type: Schema.Types.ObjectId, ref: 'Platform' }
});

module.exports = mongoose.model('Job', JobSchema);
