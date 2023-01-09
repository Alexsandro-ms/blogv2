const PostModel = require("../../models/PostModel");
const slugify = require("slugify");
const UserModel = require("../../models/UserModel");

const postCreate = (req, res) => {
  const { title, content, userId } = req.body;

  if (title != "" && userId != undefined && content != "") {
    if (isNaN(userId)) {
      return res
        .status(400)
        .json({ message: "Id incorrect or not registered" });
    } else {
      PostModel.create({
        title,
        slug: slugify(title),
        content,
        userId
      })
        .then(() => {
          return res
            .status(201)
            .json({ message: "Post created successfully!" });
        })
        .catch((err) => {
          return res.status(400).json({ message: "Error try again!" });
        });
    }
  } else {
    res.status(400).json({ message: "Fill in all fields to proceed..." });
  }
};

module.exports = postCreate;
