const Sequelize = require("sequelize");

const sequelize = new Sequelize("crypto", "root", "localhost", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    socketPath: "",
  },
  define: {
    timestamps: false,
  },
  timestamps: false,
  logging: true,
  operatorsAliases: 0,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./user")(sequelize, Sequelize);
db.currency = require("./currency")(sequelize, Sequelize);

module.exports = db;
