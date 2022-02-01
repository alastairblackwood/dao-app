// import { sign, verify, VerifyCallback } from 'jsonwebtoken';
// import passport from 'passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// import User from '../models/usersModel';

// interface RefreshToken {
//   id: string;
//   iat: number;
//   exp: number;
// }

// // helper function to authenticating a route
// export const authRequired = () =>
//   passport.authenticate('jwt', { session: false });

// // helper function to generate access tokens
// export const generateToken = (payload: any) =>
//   sign(payload, process.env.TOKEN_SECRET!, {
//     expiresIn: 36000,
//   });

// export const generateRefreshToken = (payload: any) =>
//   sign(payload, process.env.REFRESH_SECRET!, { expiresIn: '7d' });

// export default (p: { use: (arg0: Strategy) => void }) => {
//   const opts = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.TOKEN_SECRET,
//   };

//   p.use(
//     new Strategy(opts, async (payload, done) => {
//       const user = await User.findById(payload.id);

//       if (user) {
//         return done(null, user);
//       }

//       return done(null, false);
//     })
//   );
// };

// // function to process new tokens from a refresh token
// export async function processRefreshToken(refreshToken: any) {
//   const decoded: RefreshToken = await new Promise((resolve, reject) => {
//     if (!process.env.REFRESH_SECRET) throw new Error('Refresh secret missing');

//     const callback: VerifyCallback<RefreshToken> = (err, d) => {
//       if (err || !d) {
//         reject(err);
//       } else {
//         resolve(d);
//       }
//       verify(refreshToken, process.env.REFRESH_SECRET as any, callback as any);
//     };
//     // verify(
//     //   refreshToken,
//     //   process.env.REFRESH_SECRET!,
//     //   (err: Error, d: RefreshToken) => {
//     //     if (err) {
//     //       reject(err);
//     //     } else {
//     //       resolve(d);
//     //     }
//     //   }
//     // );
//   });
//   // const user = await User.findById(decoded.id);

//   const payload = {
//     // id: user?._id,
//   };

//   const token = generateToken(payload);
//   const newRefreshToken = generateRefreshToken(payload);

//   return { token, refreshToken: newRefreshToken };
// }
