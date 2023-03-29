
const mongoose = require('./server');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  avgStep: {
    type: Number,
    default: 0
  },
  avgSleep: {
    type: Number,
    default: 0
  },
  avgCalories: {
    type: Number,
    default: 0
  },
  dailyStepGoal: {
    type: Number,
    required: true
  }
});

customerSchema.index({ firstName: 'text', lastName: 'text' });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;



;
