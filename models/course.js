'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports =(sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {

    }
  };
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    estimatedTime: DataTypes.STRING,
    materialsNeeded: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
}