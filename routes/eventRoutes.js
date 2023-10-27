const express = require('express');
const eventController = require('./../controllers/eventController');

const router = express.Router();

router
  .route('/')
  .get(eventController.getAllEvents)
  .post(eventController.createEvent)
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

router.route('/:id').get(eventController.getEvent);

module.exports = router;
