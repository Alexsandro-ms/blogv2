const UserModel = require("../../models/UserModel");
const bcrypt = require("bcryptjs");

const userCreate = (req, res) => {
  const { name, lastName, email, password } = req.body;
  UserModel.findOne({
    where: {
      email
    }
  }).then(async (user) => {
    if (user == undefined) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      UserModel.create({
        name,
        lastName,
        email,
        password: hash
      })
        .then(() => {
          return res.status(201).json({ message: "The user was created!" });
        })
        .catch((err) => {
          return res
            .status(500)
            .json({ message: "Internal Server Error", err });
        });
    } else {
      res.status(400).json({ message: "User already exists..." });
    }
  });
};

module.exports = userCreate;
