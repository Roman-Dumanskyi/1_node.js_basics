const users = new Map();

export default class UserRepositiry {
  save(user) {

    console.log(user);
    users.set(user.userId, user);
  };

  get(userId) {
    return users.get(userId);
  };

  getAll() {
    return users.values();
  }
}
