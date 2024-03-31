import { Router } from 'express';
import UrlService from '../services/UrlService.js';

export default class CodeController extends Router {
  constructor() {
    super();

    this.urlServise = new UrlService();
    this.onInit();
  }

  onInit = () => {
    this.get('/:code', (req, res) => {
      const code = req.params.code;
      const url = this.urlServise.getUrl(code).url;

      if (!url) {
        res.status(404).end('There is no data for that CODE');
      }

      this.urlServise.addUrlVisits(code);

      res.redirect(302, url);
    });
  };
}
