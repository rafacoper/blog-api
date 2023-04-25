const { DataTypes, Model } = require('sequelize');
const sequelize = require("./db.config")

class User extends Model {
  static associate({ Post }) {
    this.hasMany(Post, { foreignKey: 'userId', as: 'post' })
  }
};
User.init({
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
    type: DataTypes.INTEGER,
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
}, {
  sequelize,
  timestamps: true,
  paranoid: true,
  modelName: 'User',
});

return User;
