const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      Theme.hasMany(Question, { foreignKey: 'theme_id' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
      modelName: "Theme",
      tableName: "Themes",
  }
  Theme.init(attributes, options);
  return Theme;
};
