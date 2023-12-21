require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./src/routes/routes");
mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();

app.use(express.json());
app.use("/api", routes);
// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
