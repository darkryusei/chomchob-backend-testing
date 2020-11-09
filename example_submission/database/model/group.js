const Item = require("./item");

module.exports = (sequelize, Datatype) => {
  const Group = sequelize.define(
    "group",
    {
      group_id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      group: Datatype.INTEGER,
      item_id: Datatype.INTEGER,
      code: Datatype.STRING,
      start: Datatype.DATE,
      expried: Datatype.DATE,
    },
    {
      freezeTableName: true,
    }
  );

  return Group;
};
