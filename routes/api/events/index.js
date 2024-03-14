const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const eventController = require("../../../controllers/api/events");
const { addEventValidation } = require("../../../validators/event");
const { deleteEventValidation } = require("../../../validators/event");
const { updateEventValidation } = require("../../../validators/event");

const handlingValidatErr = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.get("/", eventController.getAllEvents);
router.post(
  "/",
  addEventValidation(),
  handlingValidatErr,
  eventController.creatingNewEvent
);
router.put(
  "/:id",
  updateEventValidation(),
  handlingValidatErr,
  eventController.updatingEvent
);
router.delete(
  "/:id",
  deleteEventValidation(),
  handlingValidatErr,
  eventController.deletingEvent
);
module.exports = router;
