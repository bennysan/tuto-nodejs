const config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
};

module.exports = { config };
