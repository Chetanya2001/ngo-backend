require("dotenv").config(); // Load .env variables

module.exports = {
  development: {
    username: process.env.DB_USER, // DB_USER from .env
    password: process.env.DB_PASSWORD, // DB_PASSWORD from .env
    database: process.env.DB_NAME, // DB_NAME from .env
    host: process.env.DB_HOST, // DB_HOST from .env
    dialect: "mysql", // MySQL dialect
  },
  // You can add other environments like 'test' or 'production' if needed
};
