const UserModel = require("../../models/UserModel");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const userLogin = (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({
    where: {
      email
    }
  })
    .then((user) => {
      if (user != undefined) {
        const passwordValidation = bcrypt.compareSync(password, user.password);
        if (passwordValidation) {
          req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email
          };
          res
            .status(200)
            .json({ message: "User has been successfully logged in!" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = userLogin;
