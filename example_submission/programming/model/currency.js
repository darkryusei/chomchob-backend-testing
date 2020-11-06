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
      main: {
        type: Datatype.STRING,
        field: "main",
      },
      secondary: {
        type: Datatype.STRING,
        field: "secondary",
      },
      rate: {
        type: Datatype.DECIMAL,
        field: "rate",
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Currency;
};
