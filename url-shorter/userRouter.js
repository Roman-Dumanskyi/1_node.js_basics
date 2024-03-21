import express from 'express';

const router = new express.Router();

router.get('/name', (req, res, next) => {
  res.send('Roman');
});
router.get('/email', (req, res, next) => {
  res.send('roman@gmail.com');
});

export default router;
