import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: 'Enter an email',
    validate: {
      validator: (v) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v),
      message: 'Not valid email address'
    }
  },
  company: {
    type: String
  },
  phone: {
    type: String,
    validate: {
      validator: (v) => /[\d ]+/.test(v),
      message: 'Phone should be a number'
    }
  },
  message: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

export default ContactSchema;