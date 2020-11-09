const Sequelize = require("sequelize");
const config = require("../config");

// const sequelize = new Sequelize(
//   config.DATABASE,
//   config.USER_DB,
//   config.PASS_DB,
//   {
//     host: config.HOST_DB,
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//     dialectOptions: {
//       socketPath: "",
//     },
//     define: {
//       timestamps: false,
//     },
//     timestamps: false,
//     logging: true,
//     operatorsAliases: 0,
//   }
// );

// ------------------------ ! เปิดเมื่อขึ้น GCP ---------------------------
const sequelize = new Sequelize(
  config.DATABASE,
  config.USER_DB,
  config.PASS_DB,
  {
    dialect: "mysql",
    // e.g. host: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
    host: config.SOCKETPATH,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
      // same as host string above
      socketPath: config.SOCKETPATH,
    },
    define: {
      timestamps: false,
    },
    timestamps: false,
    logging: true,
    operatorsAliases: 0,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.userA = require("./user_a")(sequelize, Sequelize);
db.userB = require("./user_b")(sequelize, Sequelize);
db.currency = require("./currency")(sequelize, Sequelize);

module.exports = db;
