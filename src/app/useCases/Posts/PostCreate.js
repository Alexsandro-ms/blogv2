const PostModel = require("../../models/PostModel");
const slugify = require("slugify");

const postCreate = (req, res) => {
  const { title, slug, content } = req.body;
  if (title != "" && slug != "" && content != "") {
    PostModel.create({
      title,
      slug: slugify(title),
      content
    })
      .then(() => {
        res.status(201).json({ message: "Post created successfully!" });
      })
      .catch((err) => {
        res.send(400).json({ message: "Error try again!" });
      });
  } else {
    res.status(400).json({ message: "Fill in all fields to proceed..." });
  }
};

module.exports = postCreate;
