require('dotenv').config();

const dbConfig = {
  development: {
    username: process.env.DB_UserName,
    password: process.env.DB_Password,
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    port: 5432,
    // ssl: true,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_UserName,
    password: process.env.DB_Password,
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_UserName,
    password: process.env.DB_Password,
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    dialect: "postgres",
  },
}
module.exports = dbConfig;