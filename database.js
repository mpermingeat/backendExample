const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const models = require("./src/models/index");
const {
  DEPLOY,
  FORCE,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_PORT,
  DB_DIALECT,
  DB_USERNAME_LOCAL,
  DB_PASSWORD_LOCAL,
  DB_DATABASE_LOCAL,
  DB_PORT_LOCAL,
  DB_HOSTNAME_LOCAL,
} = process.env;

const sequelize =
  DEPLOY === "true"
    ? new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
        logging: false,
      })
    : new Sequelize(DB_DATABASE_LOCAL, DB_USERNAME_LOCAL, DB_PASSWORD_LOCAL, {
        host: DB_HOSTNAME_LOCAL,
        dialect: DB_DIALECT,
      });

const loadedModels = {};
Object.entries(models).forEach(([modelName, modelDefinition]) => {
  loadedModels[modelName] = modelDefinition(sequelize);
});

// ----------------  Relaciones entre los modelos  ----------------- //
const { User, UserInfo, Product, ProductUnit, Rating, Invoice, InvoiceProduct, Dollar } =
  sequelize.models;

User.hasOne(UserInfo);
UserInfo.hasOne(User, {
  foreignKey: "UserId",
});
User.hasMany(Invoice);
Invoice.hasOne(User, {
  foreignKey: "UserId",
});
Invoice.hasMany(InvoiceProduct);
InvoiceProduct.hasOne(Invoice, {
  foreignKey: "InvoiceId",
});
Product.hasMany(ProductUnit);
ProductUnit.belongsTo(Product);
// Rating.hasOne(Product, {
//   foreignKey: "ProductId",
// });

// -----------------------------------------------------------------  //

sequelize
  .sync({ force: FORCE })
  .then(() => {
    console.log("Connection to PostgreSQL 2 has been established successfully.");
    console.log("Models synchronized successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to PostgreSQL database:", error);
  });

module.exports = { db: sequelize, models: loadedModels, ...sequelize.models };
