const categoryShema = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define("Category", {
        id: DataTypes.INTERGER,
        name: DataTypes.STRING,
    });
  
    return categoryTable;
  };
  
  module.exports = categoryShema;