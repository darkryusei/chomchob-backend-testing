const Group = require("./group");

module.exports = (sequelize, Datatype) => {
  const Item = sequelize.define(
    "item",
    {
      item_id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      game: Datatype.STRING,
      prouct: Datatype.STRING,
      detail: Datatype.TEXT,
      start: Datatype.DATE,
      expired: Datatype.DATE,
      price: Datatype.INTEGER,
    },
    {
      freezeTableName: true,
    }
  );
  return Item;
};
