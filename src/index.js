const express = require("express");
const connetion = require("./utils/connetionDatabase");
const session = require("express-session");

const router = require("./routes");

require("dotenv").config();

connetion
  .authenticate()
  .then(() => {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.use(
      session({
        secret: process.env.SESSIONSECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 18000000}
      })
    );

    app.use(express.json());
    app.use(router);

    console.log("Connection has been established successfully.");
    app.listen(PORT, () => console.log("server is running on port", PORT));
  })
  .catch((err) => console.error("Unable to connect to the database:", err));
