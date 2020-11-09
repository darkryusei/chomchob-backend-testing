const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.DATABASE,
  config.USER_DB,
  config.PASS_DB,
  {
    host: config.HOST_DB,
    dialect: "mysql",
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
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.item = require("./item")(sequelize, Sequelize);
db.group = require("./group")(sequelize, Sequelize);
db.order = require("./order")(sequelize, Sequelize);
db.payment = require("./payment")(sequelize, Sequelize);
db.item.hasMany(db.group, { foreignKey: "item_id" });
db.group.hasOne(db.order, { foreignKey: "group_id" });
db.order.hasOne(db.payment, { foreignKey: "order_id" });

module.exports = db;
