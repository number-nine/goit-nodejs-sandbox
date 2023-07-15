// const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://sa:McZ6I35wwAmZ88Hq@cluster0.vfgbduy.mongodb.net/contacts_db?retryWrites=true&w=majority";

// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("DB connection success"))
//   .catch(error => console.log(error.message));


const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const contactsRouter = require("./routes/api/contacts");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
//   throw HttpError(404, "Not found");
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;
