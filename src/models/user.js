'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      // User.hasMany(models.news, {
      //   foreignKey: 'user_id',
      //   as: 'news',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    gender: DataTypes.ENUM('Laki-laki', 'Perempuan'),
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  })
  return User
}
