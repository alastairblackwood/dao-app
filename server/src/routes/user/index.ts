import express from 'express';

const router = express.Router();

// user login
// router.post("/", login)

router.get('/', (req, res) => {
  res.send('user route');
});

export default router;
