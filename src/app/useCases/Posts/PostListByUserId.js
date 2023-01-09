const UserModel = require("../../models/UserModel");
const PostModel = require("../../models/PostModel");

const postListByUserId = (req, res) => {
  const id = 1;
  if (!isNaN(id)) {
    UserModel.findByPk(id).then((user) => {
      if (user.id != undefined) {
        PostModel.findAll({
          where: {
            userId: user.id
          }
        })
          .then((posts) => {
            return res.status(200).json(posts);
          })
          .catch((err) => {
            return res.send(404).json({ message: "User not found", err });
          });
      }
    });
  } else {
    return res.status(404).json({ message: "enter a correct id" });
  }
};

module.exports = postListByUserId;
