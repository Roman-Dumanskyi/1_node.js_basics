import urserService from '../data-bases/usersDB.js';

const users = urserService.getUsersList();
export default (req, res, next) => {
  const auth = req.header('Authorization').toString();
  let ifExist = false;

  users.forEach(user => ifExist = user.name === auth);
   if(!ifExist) {
     next();

     return
   }

  res.status(403).end('User already exist');

}
