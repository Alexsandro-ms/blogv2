const UserModel = require("../../models/UserModel");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const userLogin = (req, res) => {
  const { email, password } = req.body;
  if (email && password != "") {
    UserModel.findOne({
      where: {
        email
      }
    })
      .then((user) => {
        if (user != undefined) {
          const passwordValidation = bcrypt.compareSync(
            password,
            user.password
          );
          if (passwordValidation) {
            req.session.user = {
              id: user.id,
              email: user.email
            };
            return res
              .status(200)
              .json({ message: "User has been successfully logged in!" });
          } else {
            return res
              .status(401)
              .json({ message: "Incorrect email or password" });
          }
        } else {
          return res.status(404).json({ message: "User does not exist" });
        }
      })
      .catch((err) => {
        return res.status(401).json({ message: err });
      });
  } else {
    return res.status(400).json({ message: "fill in all fields" });
  }
};

module.exports = userLogin;
