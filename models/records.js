'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    static associate(models) {
      Records.belongsTo(models.Questions, { foreignKey: 'question_id', as: 'question', onDelete: 'RESTRICT', });
      Records.belongsTo(models.Answers, { foreignKey: 'answer_id', as: 'answer', onDelete: 'RESTRICT', });
    }
  }
  Records.init({
    identity_user: DataTypes.STRING,
    question_id: DataTypes.INTEGER,
    answer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Records',
  });
  return Records;
};