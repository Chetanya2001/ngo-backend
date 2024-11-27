const express = require("express");
const app = express();
const { sequelize } = require("./models"); // Import sequelize instance

// Middleware to parse JSON request bodies
app.use(express.json());

// Sync the models with the database
sequelize
  .sync() // This syncs the database with your Sequelize models (creates tables if they don't exist)
  .then(() => {
    console.log("Database connected and synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// Define routes (this can be expanded)
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the Express server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
