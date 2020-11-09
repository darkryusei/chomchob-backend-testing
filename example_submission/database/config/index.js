const dotevn = require("dotenv");
dotevn.config();

const config = {
  PORT: process.env.PORT || 3000,
  HOST_DB: process.env.HOST || "localhost",
  USER_DB: process.env.USER_DB || "root",
  PASS_DB: process.env.PASS_DB || "localhost",
  DATABASE: process.env.NAME_DB || "code",
};

module.exports = config;
