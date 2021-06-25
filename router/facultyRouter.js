const express = require("express");
const { createFaculty, DeleteFaculty, getAllFaculty, getFacultyById } = require("../controller/facultyController");
const faculty_Router = express.Router();

faculty_Router.post("/add",createFaculty)
faculty_Router.post("/remove",DeleteFaculty)
faculty_Router.get("/get/all",getAllFaculty)
faculty_Router.post("/getid",getFacultyById)

module.exports = faculty_Router;