const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");

    const token = bearer[1];
    const jwtKey = process.env.JWTSECRET;

    jwt.verify(token, jwtKey, (err, data) => {
      if (err) {
        return res.status(401).json({ message: "Not autorized!" });
      } else {
        req.token = token;
        req.loggedUserInfo = {
          id: data.id,
          name: data.name,
          email: data.email
        };
      }
      next();
      return;
    });
  } else {
    return res.status(401).json({ message: "Not authorized!" });
  }
};

module.exports = auth;
