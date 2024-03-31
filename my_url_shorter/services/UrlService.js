import UrlRepository from '../repository/UrlRepository.js';
import UrlModel from '../models/UrlModel.js';
import generateCode from '../helper.js';

export default class UrlService {
  constructor() {
    this.urlRepository = new UrlRepository();
  }

  addUrl = (code, urlData) => this.urlRepository.add(code, urlData);

  getUrl = (code) => this.urlRepository.get(code);

  addUrlVisits = (code) => this.urlRepository.incrementVisits(code);

  getUrlsForUser = (name) => {
    const urls = this.urlRepository.getAll();
    const result = [];

    for (const url of urls) {
      if(url.user === name) {
        result.push(url)
      }
    }

    return result;

  }
}
