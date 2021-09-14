const Joi = require("joi");
const db = require("../database");
const { getHash } = require("../utils");

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  role: Joi.string(),
  repeat_password: Joi.ref("password"),
});

const User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role || "user";
  this.createdAt = user.createdAt;
};

// module.exports.getOneByUserName = (username, res) => {
//   db.query(
//     `SELECT * FROM users WHERE username = '${username}'`,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).json({ err: err });
//       }
//       if (result[0].password === password) {
//         res.status(200).json({
//           message: "Connected !",
//           data: result.insertId,
//         });
//       }
//     }
//   );
// };

/*
  Api users
  {
    usr_id: int,
    usr_username: string,
    usr_email: string,
    usr_ password: string,
    usr_role: string,
    createdAt: date
  }

  function create user
  function update user
  dunction delate user
  function find one user with id
  function finf one user with email
  function get all user

*/

function createUser(user) {
  const sql = `INSERT INTO users (username, email, password, role, createdAt) VALUE ('${user.username}', '${user.email}', '${user.password}', '${user.role}', '${user.createdAt}')`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject({ error: err });
        return;
      }
      resolve({
        message: "User Registred successfully !",
        userId: result.insertId,
      });
    });
  });
}

function findOneById(userId) {
  const sql = `SELECT * FROM users WHERE ID = '${userId}'`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject({ err });
        return;
      }
      resolve(result[0]);
    });
  });
}

function findOneByEmail(email) {
  const sql = `SELECT * FROM users WHERE email = '${email}'`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject({ err });
        return;
      }
      if (result.length) {
        resolve(result[0]);
      } else {
        reject({ error: "User not found !" });
      }
    });
  });
}

function updateUser(userId, data) {
  return new Promise((resolve, reject) => {});
}

module.exports = { userSchema, User, createUser, findOneById, findOneByEmail };
