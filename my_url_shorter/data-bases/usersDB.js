const usersDB = [];

function addUser(res) {
  usersDB.push(res);
}

function getUser(name) {
  return usersDB.find(user => {
    return user.name === name;
  });
}

function getUsersList() {
  return usersDB;
}

export default { addUser, getUser, getUsersList };
