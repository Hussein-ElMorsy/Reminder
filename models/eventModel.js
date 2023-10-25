const mongoose = require('mongoose');
const slugify = require('slugify');

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A event must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        20,
        'A Event name must have less or equal than 20 characters',
      ],
      minlength: [6, 'A Event name must have more or equal than 6 characters'],
    },
    description: {
      type: String,
      trim: true,
    },
    startDate: Date,
    cretedAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
