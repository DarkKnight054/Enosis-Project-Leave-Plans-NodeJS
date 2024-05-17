'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaidLeaves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaidLeaves.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    empId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assignedProjects: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    leaveFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leaveTo : {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leaveStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'PaidLeaves',
  });
  return PaidLeaves;
};