import UserRepository from '../repository/UserRepository.js';
import UserModel from '../models/UserModel.js';
import generateCode from '../helper.js';

export default class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  createUser(userData) {
    const user = new UserModel(
      generateCode(3),
      userData.name,
      userData.password,
      new Date()
    );

    this.userRepository.save(user);
  }

  getAllUsers = () => this.userRepository.getAll();
}
