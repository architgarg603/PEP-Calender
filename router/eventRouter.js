const express = require("express");
const { createEvent, getAllEvent } = require("../controller/eventController");
const eventRouter = express.Router();

eventRouter.post("/add",createEvent)
eventRouter.post("/get",getAllEvent)

module.exports = eventRouter;