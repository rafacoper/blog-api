const Sequelize = require("sequelize")
const config = require("../config/config")

const dbName = config.database; 
const dbUser = config.username;
const dbPassword = config.password;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres", 
  host: "localhost",
});

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

// sequelize.sync().then(() => {
//   console.log('User table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });

module.exports = sequelize
