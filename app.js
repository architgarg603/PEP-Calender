const express = require("express");
const cors = require("cors");
const path = require("path")
const faculty_Router = require("./router/facultyRouter");
const mailRouter = require("./router/mailROuter");
const eventRouter = require("./router/eventROuter");
const { getView } = require("./controller/viewController");

const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(__dirname+"/public"));
app.get("/",getView)
app.use("/faculty", faculty_Router);
app.use("/mail", mailRouter)
app.use("/event", eventRouter)

let port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("server is listening at 4000 port !!");
});