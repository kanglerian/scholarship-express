'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    static associate(models) {
      Questions.belongsTo(models.Categories, { foreignKey: 'category_id', as: 'category', onDelete: 'RESTRICT', });
      Questions.hasMany(models.Answers, { foreignKey: 'question_id' });
      Questions.hasMany(models.Records, { foreignKey: 'question_id' });
    }
  }
  Questions.init({
    category_id: DataTypes.INTEGER,
    question: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};