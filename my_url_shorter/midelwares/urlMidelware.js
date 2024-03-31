import UserService from '../services/UserService.js';

export default (req, res, next) => {
  const userService = new UserService();
  const auth = req.header('Authorization').toString();
  const users = userService.getAllUsers();
  let ifExist = false;

  for(let user of users) {
    ifExist = user.name === auth
  }

  if(ifExist) {
    next();

    return
  }

  res.status(404).end('User not exist');
}
