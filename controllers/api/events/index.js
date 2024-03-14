const eventService = require("../../../services/events");

const eventController = {
  getAllEvents(req, res) {
    const events = eventService.gettingAllEvents();
    res.json(events);
  },
  creatingNewEvent(req, res) {
    const newEvent = eventService.creatingNewEvent(req, res);
    res.status(201).json(newEvent);
  },
  updatingEvent(req, res) {
    const eventId = req.params.id;
    const updateEvent = eventService.updatingEvent(eventId, req.body);
    if (updateEvent) {
      res.json(updateEvent);
    } else {
      res.status(404).send("Event could not be not found");
    }
  },
  deletingEvent(req, res) {
    const eventId = req.params.id;
    const deleteEvent = eventService.gettingEventById(eventId);
    if (deleteEvent) {
      eventService.deletingEvent(eventId);
      res.status(204).send("Deleting Successfully");
    } else {
      res.status(404).send("Event could not be found");
    }
  },
};

module.exports = eventController;
