'use-strict';

module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return Categorie;
};