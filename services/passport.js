const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("this working?", profile.id);
      User.findOne({ googleId: profile.id })
        // promise
        .then(existingUser => {
          if (existingUser) {
            // we already have a user
          } else {
            // create new user
            new User({ googleId: profile.id }).save();
          }
        });
    }
  )
);
