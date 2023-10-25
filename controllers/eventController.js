const AppError = require('../utils/appError');
const Event = require('./../models/eventModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllEvents = factory.getAll(Event);

exports.createEvent = factory.createOne(Event);

exports.deleteEvent = factory.deleteOne(Event);

exports.updateEvent = factory.updateOne(Event);

exports.getEvent = factory.getOne(Event);
