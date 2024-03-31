const urlsDb = new Map();

export default class UrlRepository {

  add = (code, url) => urlsDb.set(code, url);

  get = (code) => urlsDb.get(code);

  getAll = () => urlsDb.values();

  incrementVisits = (code) => urlsDb.get(code).visits++;
}
