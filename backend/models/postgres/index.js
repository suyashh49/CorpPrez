// backend/models/postgres/index.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,        // or console.log if you want SQL logs
});

// Collect all models
const db = {
  sequelize,            // the Sequelize instance
  Sequelize,            // the library
  User: require("./user.model")(sequelize, DataTypes),
  // add more models here as you build them...
};

// If you have associations, define them here:
// Object.values(db).forEach(model => {
//   if (model.associate) model.associate(db);
// });

module.exports = db;
