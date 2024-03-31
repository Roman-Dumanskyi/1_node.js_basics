export default class UrlModel {
  name;
  url;
  user;
  created_time;
  visits;

  constructor(name, url, user, created_time) {
    this.name = name;
    this.url = url;
    this.user = user;
    this.created_time = created_time;
    this.visits = 0;
  }

}
