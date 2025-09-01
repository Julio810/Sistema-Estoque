// src/models/stock_exit.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StockExit extends Model {
    static associate(models) {
      // Saída pertence a um produto
      StockExit.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });

      // Saída registrada por um usuário
      StockExit.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }

  StockExit.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "products", key: "id" },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      motivo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "StockExit",
      tableName: "stock_exits",
      timestamps: true,
    }
  );

  return StockExit;
};
