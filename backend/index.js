const createError = require("http-errors");
const express = require("express");
const morgan = require("morgan");
const port = 5000;

let app = express();

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  next(createError(404));
});

app.use("/", (err, req, res, next) => {
  res.locals.message = err.message;
  res.status(500).send("error occured");
});

app.get("/", (req, res, next) => {
  res.send("Get Method");
});

app.use((req, res) => {
  res.status(200).send("hello");
});

app.listen(port, () => console.log("Server Activated"));
