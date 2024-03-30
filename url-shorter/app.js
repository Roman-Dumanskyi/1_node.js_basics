import express from 'express';
import UserController from './controllers/UserController.js';

const app = express();

app.use(express.json());

app.all('/', (req, res) => {
  res.send('Works!');
});

app.use('/user', new UserController());

// app.use(AuthMiddleware);

app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).send(err.message);
});

app.set('views', 'view');
app.set('view engine', 'ejs');

app.get('/get_pug', (req, res) => {
  res.render('index.pug', {name: 'Roman'});
});

app.get('/get_ejs', (req, res) => {
  res.render('index.ejs', {password: 'qwerty'});
});

app.use('/files', express.static('view'));

app.listen(3200, () => console.log('Server started, port: http://127.0.0.1:3200'));
