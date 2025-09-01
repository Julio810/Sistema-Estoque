'use strict';

const { Model, DataTypes, Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Product, {
        foreignKey: 'category_id',
        as: 'category'
      })

      // Produto pertence a um fornecedor
      Product.belongsTo(models.Supplier, {
        foreignKey: 'supplier_id',
        as: 'supplier'
      })
    }
  }

  Product.init(
    {
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'suppliers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: true
    }
  )

  return Product
}