const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
  name: { type: String, required: true },
  profileLoginUrl: { type: String, required: true },
  contactNumber: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
});

module.exports = mongoose.model('Platform', PlatformSchema);
