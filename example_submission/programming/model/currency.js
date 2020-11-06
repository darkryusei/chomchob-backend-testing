module.exports = (sequelize, Datatype) => {
  const Currency = sequelize.define(
    "currency",
    {
      id: {
        type: Datatype.INTEGER,
        field: "id",
        primaryKey: true,
        autoIncrement: true,
      },
      currency: {
        type: Datatype.STRING,
        field: "currency",
      },
      perETH: {
        type: Datatype.DECIMAL,
        field: "perETH",
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Currency;
};
