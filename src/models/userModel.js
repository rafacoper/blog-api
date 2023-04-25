const { DataTypes } = require('sequelize');
const sequelize = require("./db.connection")


const User = sequelize.define(
  'Users', 
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "active", "disabled"),
      defaultValue: "active",
      allowNull: false
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
  }, 
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: 'User'
  },
);

User.associate = models => {
  User.hasMany(models.Post, { foreignKey: 'createdBy' })
}

module.exports = User;
