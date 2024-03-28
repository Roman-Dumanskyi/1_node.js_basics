import express from 'express';
import generateCode from '../helper.js';
import urlService from '../data-bases/urlDB.js';

const urlController = new express.Router();

urlController.post('/:name', (req, res, next) => {
  const code = generateCode(5);
  const data = {
    ...req.body,
    user: req.params.name,
    created_time: new Date(),
    visits: 0,
  }
  const response = {
    code: code,
    ...data
  }

  urlService.addURL(code, data);

  res.json(response);
});

export default urlController;
