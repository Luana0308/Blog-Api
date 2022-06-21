const PostCategoryShema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define("PostCategory", {
        postId: { type: DataTypes.INTEGER, primaryKey: true},
        categoryId: { type: DataTypes.INTEGER, primaryKey: true}
    }, 
    {
        timestamps: false,
    });

    PostCategoryTable.associate = (models) => {

        models.BlogPost.belongsToMany(models.Category, {
            as: 'category',
            through: PostCategoryTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPost',
            through: PostCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };
  
    return PostCategoryTable;
  };
  
  module.exports = PostCategoryShema;