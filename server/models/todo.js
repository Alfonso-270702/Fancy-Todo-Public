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
      Todo.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Todo.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'title must be filled'
        },
        notNull:{
          msg: 'title must be filled'
        }
      }
      
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'description must be filled'
        },
        notNull:{
          msg: 'description must be filled'
        }
      }
    },
    status: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'status must be filled'
        },
        notNull:{
          msg: 'status must be filled'
        }
      }
    },
    due_date: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'due date must be filled'
        },
        notNull:{
          msg: 'due date must be filled'
        }
      }
    },
    userId: DataTypes.INTEGER,
    imageURL: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Fill the image url'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};