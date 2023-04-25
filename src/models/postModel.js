const { DataTypes, Model } = require('sequelize');
const sequelize = require("./db.connection")

class Post extends Model {
  static associate({ User }) {
    this.belongsTo(User, { foreignKey: 'userId', as: 'user' })
  }
};

Post.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.UUID
  },
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  tag: DataTypes.STRING,
  publishedAt: DataTypes.DATE,
  publishedBy: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id"
    }
  },
  createdAt: {
    type: DataTypes.DATE
  },
  createdBy: {
    type: DataTypes.UUID
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  updatedBy: {
    type: DataTypes.UUID
  },
  deletedAt: {
    type: DataTypes.DATE
  },
  deletedBy: {
    type: DataTypes.UUID
  },
}, {
  sequelize,
  modelName: 'Posts',
});

return Post;
