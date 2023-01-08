const Sequelize = require("sequelize");
const connetion = require("../../utils/connetionDatabase");

const PostModel = connetion.define("posts", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

PostModel.sync();

module.exports = PostModel;
