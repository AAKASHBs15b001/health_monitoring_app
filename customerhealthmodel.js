const mongoose = require('./server.js');

const customerHealthDataSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['Step', 'Sleep', 'Calories'], required: true },
  value:{ type: Number, required: true },
});

module.exports = mongoose.model('CustomerHealthData', customerHealthDataSchema);

