import express from 'express';
import protect from '../../middleswares/authMiddleware';
// This import is being used by passport.authenticate method
import passport from 'passport';
import {
  registerUser,
  loginUser,
  userData,
  updateProfile,
} from '../../controllers/userController';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  userData
);
router.post(
  '/updateprofile',
  passport.authenticate('jwt', { session: false }),
  updateProfile
);

export default router;
