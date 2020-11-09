module.exports = (sequelize, Datatype) => {
  const UserB = sequelize.define(
    "userB",
    {
      id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      currency: Datatype.STRING,
      balance: Datatype.FLOAT,
    },
    {
      freezeTableName: true,
    }
  );
  return UserB;
};
