import express from 'express';
import service from './service.js';
import AuthMiddleware from './authMiddleware.js';
import userRouter from './userRouter.js';

const app = express();
const router = new express.Router();

app.use('/user', userRouter);

app.use('/info', (req, res, next) => {
  console.log(req.path);

  next();
});

app.use('/info', (req, res, next) => {
  req.session = {
    status: 'created'
  };

  if (req.method === 'GET') {
    next();
  }

});

app.use(AuthMiddleware);

app.post('/add', express.json(),
  (req, res) => {
    console.log(req.body);

    const code = 'QWER';
    service.add(code, req.body);

    res.json({ code });
  });

app.get('/info/:code', (req, res, next) => {
  const data = service.get(req.params.code);
  res.setHeader('Session', JSON.stringify(req.session));
  res.json(data);
});

app.listen(3200, () => console.log('Server started'));
