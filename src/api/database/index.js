const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: "3333",
  user: "root",
  database: "api_db",
  password: "123456",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
