'use strict';
const { encrypt } = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, { foreignKey: 'userId'})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: `Name can't be empty`
        },
        notNull:{
          msg: `Can't register because of null`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`email can't be empty`
        },
        notNull:{
          msg: `Can't register because of null`
        }
      },
      unique:{
        args: true,
        msg: 'email already exist'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`password can't be empty`
        },
        notNull:{
          msg: `Can't register because of null`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(User){
        User.password = encrypt(User.password)
      }
    }
  });
  return User;
};