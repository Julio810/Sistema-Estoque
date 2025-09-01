const { Model } = require("sequelize");
const sequelize = require("../db/conn");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.User, { foreignKey: "role_id" });
    }
  }

  Role.init(
    {
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        descricao: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'roles',
        underscored: true,
        timestamps: true
    }
  )

  return Role
};
