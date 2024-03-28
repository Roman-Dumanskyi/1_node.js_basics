import express from 'express';
import urserService from '../data-bases/usersDB.js';

const userController = new express.Router();

userController.post('/', (req, res, next) => {
  const user = {
    ...req.body,
    created_time: new Date()
  }

  urserService.addUser(user);

  res.status(201).end('User created');
});


export default userController;
