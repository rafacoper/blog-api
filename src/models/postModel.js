const { DataTypes } = require('sequelize');
const sequelize = require("./db.connection")

const Post = sequelize.define(
  'Post',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tag: DataTypes.ARRAY(DataTypes.STRING),
    createdAt: {
      type: DataTypes.DATE
    },
    createdBy: {
      type: DataTypes.UUID,
      references: {
        model: "User",
        key: "createdBy"
      }
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
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: 'Post'
  },
);

Post.associate = models => {
  Post.belongsTo(models.User)
}

module.exports = Post;
