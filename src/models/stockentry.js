"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StockEntry extends Model {
    static associate(models) {
      // Entrada pertence a um produto
      StockEntry.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });

      // Entrada pertence a um fornecedor
      StockEntry.belongsTo(models.Supplier, {
        foreignKey: "supplier_id",
        as: "supplier",
      });

      // Entrada registrada por um usuário
      StockEntry.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }

  StockEntry.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
      supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "suppliers",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
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
      observacao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'StockEntry',
      tableName: 'stock_entries',
      timestamps: true
    }
  );

  return StockEntry
};
