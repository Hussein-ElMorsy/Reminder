const mongoose = require('mongoose');
const slugify = require('slugify');

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Event must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        20,
        'A Event name must have less or equal than 20 characters',
      ],
      minlength: [6, 'Event name must have more or equal than 6 characters'],
    },
    description: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, 'Event should have start date.'],
    },
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
