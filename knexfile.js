// Update with your config settings
const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;


module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join("src", "db", "migrations"),
    },
    seeds: {
      directory: path.join("src", "db", "seeds")
    },
  },
};