import passport from 'passport';
import local from './localStrategy.js';
import User from '../models/User.js';

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then((user) => done(null, user))
      .catch((error) => done(error));
  });

  local();
};
