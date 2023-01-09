const Sequelize = require("sequelize");
const connetion = require("../../utils/connetionDatabase");

const UserModel = require("./UserModel");

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

UserModel.hasMany(PostModel);
PostModel.belongsTo(UserModel);

PostModel.sync();

module.exports = PostModel;
