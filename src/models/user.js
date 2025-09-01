const { Model } = require("sequelize");
const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Cada usuário pertence a um role
      User.belongsTo(models.Role, { foreignKey: "role_id", as: "role" });

      // Se futuramente quiser relacionar o usuário com entradas ou saídas de estoque
      // User.hasMany(models.StockEntry, { foreignKey: 'created_by' });
      // User.hasMany(models.StockExit, { foreignKey: 'created_by' });
    }
  }

  User.init(
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        underscored: true,
        timestamps: true
    }
  )

  return User
};
