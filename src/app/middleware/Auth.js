function Authentication(req, res, next) {
  if (req.session.user != undefined) {
    next();
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
}

module.exports = Authentication;
