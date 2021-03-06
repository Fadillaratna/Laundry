
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      this.hasMany(models.transaksi,{
        foreignKey: "id_user",
        as: "user"
      })

      this.belongsTo(models.outlet,{
        foreignKey: "id_outlet",
        as: "outlet"
      })
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    id_outlet: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role: DataTypes.ENUM('admin', 'kasir', 'owner')
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user'
  });
  return user;
};