const UserModel = require("../../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
            const jwtKey = process.env.JWTSECRET;
            jwt.sign(
              { id: user.id, name: user.name, email: user.email },
              jwtKey,
              {
                expiresIn: "48h"
              },
              (err, token) => {
                if (err) {
                  return res.status(400).json({ message: "Internal error" });
                } else {
                  return res.status(200).json({
                    message: "User has been successfully logged in!",
                    token
                  });
                }
              }
            );
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
