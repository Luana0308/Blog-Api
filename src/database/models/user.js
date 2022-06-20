const UserShema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("User", {
        id: DataTypes.INTERGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    });
  
    return UserTable;
  };
  
  module.exports = UserShema;