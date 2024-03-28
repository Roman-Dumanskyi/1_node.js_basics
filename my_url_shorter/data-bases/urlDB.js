const urlsDB = new Map();

function addURL(code, res) {
  urlsDB.set(code, res);
}

function getURL(code) {
  return urlsDB.get(code);
}

function incrementVisits(code) {
  urlsDB.get(code).visits++;
}
export default { addURL, getURL, incrementVisits };
