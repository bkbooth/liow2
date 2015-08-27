var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var ActSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: 'User', required: true },
  group: { type: ObjectId, ref: 'Group', required: true },
  deed: { type: ObjectId, ref: 'Deed', required: true },
  created: { type: Date, default: Date.now, required: true }
});

ActSchema.statics.getFilter = function __getFilter() {
  return ['user', 'group', 'deed'];
};

module.exports = mongoose.model('Act', ActSchema);
