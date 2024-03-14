const express = require("express");
const eventRouter = require("./events");
const router = express.Router();
router.use("/events", eventRouter);
module.exports = router;
