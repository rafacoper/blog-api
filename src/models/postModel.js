const { DataTypes, Model } = require('sequelize');
const sequelize = require("./db.config")

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
}, {
  sequelize,
  modelName: 'Posts',
});

sequelize.sync().then(() => {
  console.log('User table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

return Posts;