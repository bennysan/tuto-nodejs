const bcrypt = require("bcrypt");
const saltRounds = 10;

const getHash = async (pass) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, saltRounds, function (err, hash) {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

const comparePass = (pass, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, hash, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

module.exports = { getHash, comparePass };
