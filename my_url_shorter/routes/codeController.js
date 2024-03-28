import express from 'express';
import generateCode from '../helper.js';
import urlService from '../data-bases/urlDB.js';

const codeController = new express.Router();

codeController.get('/:code', (req, res, next) => {
  const code = req.params.code;
  const url = urlService.getURL(code).url;

  if(!url) {
    res.status(404).end('There is no data for that CODE');
  }
  urlService.incrementVisits(code);

  res.redirect(302, url);
});

export default codeController;
