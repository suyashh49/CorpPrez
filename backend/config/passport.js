const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {User} = require("../models/postgres");

passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value;
        let user = await User.findOne({where: {email}});

        if(!user){
            const domain=email.split("@")[1];
            user =await User.create({
                email,
                fullName: profile.displayName,
                role: "unregistered",
                organization: domain,
            });
        }

        done(null,user);
    })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

