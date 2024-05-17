'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    projectMembers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    projectStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectDeadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leaveId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true, 
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};