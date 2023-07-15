const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://sa:McZ6I35wwAmZ88Hq@cluster0.vfgbduy.mongodb.net/contacts_db?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Connected to DB, starting webserver");
    app.listen(3000, () => console.log("Server is running on port: 3000"));
  })
  .catch((error) => {
      console.log(error.message);
      process.exit(1);
  });

// app.listen(3000, () => console.log('Server is running on port: 3000'));
