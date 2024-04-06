import express from 'express';
import UrlMidelware from './midelwares/urlMidelware.js';
import UserController from './controllers/UserController.js';
import UrlController from './controllers/UrlController.js';
import CodeController from './controllers/CodeController.js';

const app = express();

app.use(express.json());

app.use('/urls/add', UrlMidelware);

app.use('/urls', new UrlController());
app.use('/users', new UserController());
app.use('/code', new CodeController());

app.set('views', 'pages');
app.set('view engine', 'ejs');

app.listen(3200, () => console.log('Server has been started!'));
