const express = require("express");
const passport = require("passport");
const googleStrategy = require("passprt-google-oauth20");

const app = express();

passport.use(new googleStrategy());

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
