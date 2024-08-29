import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

export function initializePassport(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Extract email and name from the profile
    const { email, given_name, family_name } = profile._json;

    // Create a user object with email and name
    const user = {
      email,
      firstName: given_name,
      lastName: family_name
    };

    // Handle the user profile and store user information as needed
    return done(null, user);
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}
