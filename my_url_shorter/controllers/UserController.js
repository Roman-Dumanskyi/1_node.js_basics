import { Router } from 'express';
import UserService from '../services/UserService.js';

export default class UserController extends Router {

  constructor() {
    super();

    this.userService = new UserService();
    this.onInit();
  }

  onInit = () => {
    this.post('/create', (req, res) => {
      this.userService.createUser(req.body);

      res.status(201).end('User created');
    });

    this.get('/', (req, res) => {
      const users = this.userService.getAllUsers();

      res.render('users', { users });
    });
  };

}
