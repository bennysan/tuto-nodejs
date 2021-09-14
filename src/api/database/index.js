const mysql = require("mysql2");
const { config } = require("../utils/config");

const pool = mysql.createPool(config.db);

module.exports = pool;
