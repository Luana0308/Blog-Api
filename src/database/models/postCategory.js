const PostCategoryShema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define("PostCategory", {}, 
    {
        timestamps: false,
    });

    PostCategoryTable.associate = (models) => {
        PostCategoryTable.belongsTo(models.Patients, {
            as: 'patients',
            through: PatientSurgeries,
            foreignKey: 'surgery_id',
            otherKey: 'patient_id',
        });
    };
  
    return PostCategoryTable;
  };
  
  module.exports = PostCategoryShema;