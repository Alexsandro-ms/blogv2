const Sequelize = require("sequelize");
const connetion = require("../../utils/connetionDatabase");
const PostModel = require("./PostModel");

const UserModel = connetion.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

UserModel.sync();

module.exports = UserModel;
