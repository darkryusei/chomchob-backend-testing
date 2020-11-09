module.exports = (sequelize, Datatype) => {
  const UserA = sequelize.define(
    "userA",
    {
      id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      currency: {
        type: Datatype.STRING,
        field: "currency",
      },
      balance: {
        type: Datatype.FLOAT,
        field: "balance",
      },
    },
    {
      freezeTableName: true,
    }
  );
  return UserA;
};
