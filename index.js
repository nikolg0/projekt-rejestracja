const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/projekt-rejestracja");

const Event = require("./app/models/Events");

const eventController = require("./app/controllers/eventController.js");

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use("/", express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", eventController.index);

app.post("/new", eventController.create);

app.get("/new", eventController.newPage);

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
