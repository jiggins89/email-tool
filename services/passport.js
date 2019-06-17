const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("this working?", profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // null means no issues, then tell who the user is
          done(null, existingUser);
        } else {
          // create new user
          new User({ googleId: profile.id, email: profile._json.email })
            // saves new user to the db if they don't exist already
            .save()
            // returns promise which is the saved user
            .then(user => done(null, user));
        }
      });
    }
  )
);
