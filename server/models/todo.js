'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'title must be filled'
        },
        // allowNull:{
        //   args: false,
        //   msg: 'title must be filled'
        // }
      }
    },
    description: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'description must be filled'
        },
        // allowNull:{
        //   args: false,
        //   msg: 'description must be filled'
        // }
      }
    },
    status: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'status must be filled'
        },
        // allowNull:{
        //   args: false,
        //   msg: 'status must be filled'
        // }
      }
    },
    due_date: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'due date must be filled'
        },
        // allowNull:{
        //   args: false,
        //   msg: 'due date must be filled'
        // }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};