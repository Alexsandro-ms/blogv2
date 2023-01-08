const { Sequelize } = require("sequelize");
require("dotenv").config();

const mysqlUser = process.env.MYSQLUSER;
const mysqlPassword = process.env.MYSQLPASSWORD;
const mysqlDatabase = process.env.MYSQLDATABASE;

// Developer
const connetion = new Sequelize(mysqlDatabase, mysqlUser, mysqlPassword, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  timezone: "-03:00"
});

// Production:
// const connetion = new Sequelize(
//   `mysql://${mysqlUser}:${mysqlPassword}@containers-us-west-129.railway.app:7229/${mysqlDatabase}`
// );

module.exports = connetion;
