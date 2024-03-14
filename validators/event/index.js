const { body, param } = require("express-validator");
const eventService = require("../../services/events");

const addEventValidation = () => {
  return [
    body("eventName").notEmpty().withMessage("Please enter event name"),
    body("eventDateTime")
      .matches(
        /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])T(?:[01][0-9]|2[0-3]):(?:[0-5][0-9])$/,
        "g"
      )
      .withMessage(
        'Please enter a valid date and time in the format "YYYY-MM-DD HH:mm'
      ),
    body("location").notEmpty().withMessage("Please enter event location"),
    body("description")
      .notEmpty()
      .withMessage("Please enter event description"),
  ];
};

const deleteEventValidation = () => {
  return [
    param("id").custom(async (id) => {
      const exists = await eventService.gettingEventById(id);
      if (!exists) {
        throw new Error("Event not found");
      }
    }),
  ];
};
const updateEventValidation = () => {
  return [
    param("id").custom(async (id) => {
      const exists = await eventService.gettingEventById(id);
      if (!exists) {
        throw new Error("Event not found");
      }
    }),
    body("eventName").notEmpty().withMessage("Event name must not be empty"),
    body("eventDateTime")
      .matches(
        /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])T(?:[01][0-9]|2[0-3]):(?:[0-5][0-9])$/,
        "g"
      )
      .withMessage(
        'Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'
      ),
    body("location").notEmpty().withMessage("Event location must not be empty"),
    body("description")
      .notEmpty()
      .withMessage("Event description must not be empty"),
  ];
};

module.exports = {
  addEventValidation,
  deleteEventValidation,
  updateEventValidation,
};
