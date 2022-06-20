const categoryShema = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define("Category", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
    });
  
    return categoryTable;
  };
  
  module.exports = categoryShema;