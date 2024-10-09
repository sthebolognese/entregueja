'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Cliente,
        { foreignKey: 'ClienteId', });

      Pedido.belongsTo(models.Motoboy,
        { foreignKey: 'MotoboyId' });

    }
  }
  Pedido.init({
    data: DataTypes.DATE,
    ClienteId: DataTypes.INTEGER,
    MotoboyId: DataTypes.INTEGER,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};