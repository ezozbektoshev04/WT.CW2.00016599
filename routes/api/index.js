const express = require("express");
const event_router = require("./events");
const router = express.Router();

router.use("/events", event_router);
module.exports = router;
