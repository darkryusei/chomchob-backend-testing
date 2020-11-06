const express = require("express");
const app = express();

const config = require("./config");
const db = require("./model");
const api = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.sequelize.sync({ alter: true }).then(() => {
      console.log("Drop and Resync with { alter: true }");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use("/api", api);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(config.PORT, () => {
  console.log(`Server start on port ${config.PORT}`);
});
