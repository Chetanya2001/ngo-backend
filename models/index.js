const { Sequelize } = require("sequelize");
const config = require("../config/config"); // Import configuration

// Create Sequelize instance using the 'development' configuration
const sequelize = new Sequelize(config.development);

module.exports = { sequelize };
