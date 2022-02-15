import User from '../models/userModel';
import passport from 'passport';
import passportJwt from 'passport-jwt';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

let opts: any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

const protect = passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    const user = User.findOne(
      { _id: jwt_payload.userId },
      function (err, user) {
        if (err) return done(err, false);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    ).select('-password');
  })
);

export default protect;
