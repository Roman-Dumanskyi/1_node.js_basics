const usersDb = new Map();

export default class UserRepository {
  save = (user) => usersDb.set(user.id, user);

  getAll = () => usersDb.values();
}
