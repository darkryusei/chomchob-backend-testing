const express = require("express");
const app = express();

const config = require("./config");
const db = require("./model");

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.sequelize.sync({ force: true, alter: true }).then(() => {
      console.log("Drop and Resync with { froce: true, alter: true }");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", (req, res) => {
  // res.status(200).send("Hello World");
  res.send("Hello World");
});

app.listen(config.PORT, () => {
  console.log(`Server start on port ${config.PORT}`);
});
