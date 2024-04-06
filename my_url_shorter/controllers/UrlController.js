import UrlService from '../services/UrlService.js';
import { Router } from 'express';
import generateCode from '../helper.js';
import UrlModel from '../models/UrlModel.js';

export default class UrlController extends Router {
  constructor() {
    super();

    this.urlServise = new UrlService();
    this.onInit();
  }

  onInit = () => {
    this.post('/add/:name', (req, res) => {
      const code = generateCode(5);
      const url = new UrlModel(
        req.body.name,
        req.body.url,
        req.params.name,
        new Date(),
      );

      this.urlServise.addUrl(code, url);

      res.status(201).end('URL created');
    });

    this.get('/:name', (req, res) => {
      const urls = this.urlServise.getUrlsForUser(req.params.name);

      res.render('urls', { urls });
    });
  }
}
