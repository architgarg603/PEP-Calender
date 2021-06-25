const express = require("express");
const { mailFaculty, remind } = require("../controller/mailController");
const mailRouter = express.Router();

mailRouter.post("/to",mailFaculty)
mailRouter.post("/remind",remind)

module.exports = mailRouter;