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
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'roles',
        underscored: true
    }
  )

  return Role
};
