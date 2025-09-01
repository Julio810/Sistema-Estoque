const { Sequelize } = require("sequelize");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com o banco estabelecida com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
  }
}

testConnection();

module.exports = sequelize;
