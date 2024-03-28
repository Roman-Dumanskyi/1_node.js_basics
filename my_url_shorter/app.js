import express from 'express';
import urlController from './routes/urlController.js';
import userController from './routes/userController.js';
import UserMidelware from './midelwares/userMidelware.js';
import UrlMidelware from './midelwares/urlMidelware.js';
import codeController from './routes/codeController.js';

const app = express();

app.use('/create', UserMidelware);
app.use('/add', UrlMidelware);

app.use('/add', express.json(), urlController);
app.use('/create', express.json(), userController);
app.use('/code', express.json(), codeController);


app.listen(3200, () => console.log('Server has been started!'));
