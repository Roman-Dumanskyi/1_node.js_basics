export default class UserModel {
  id;
  name;
  password;
  created_time;

  constructor(id, name, password, created_time) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.created_time = created_time;
  }
}
