module.exports = (sequelize, Datatype) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Datatype.INTEGER,
        field: "id",
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Datatype.STRING,
        field: "username",
      },
      balance: {
        type: Datatype.FLOAT,
        field: "balance",
      },
      currency: {
        type: Datatype.STRING,
        field: "currency",
      },
      type: {
        type: Datatype.ENUM("user", "admin"),
        field: "type",
      },
    },
    {
      freezeTableName: true,
    }
  );
  return User;
};
