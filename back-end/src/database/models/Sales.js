const SalesSchema = (sequelize, DataTypes) => {
  const SalesTable = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
    },
    deliveryAddress: {
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
    },
    saleDate: {
      type: Sequelize.DATE,
    },
    status: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    tableName: 'sales',
    underscored: true
  });

  SalesTable.associate = (models) => {
    SalesTable.belongsTo(models.users, {
      foreignKey: 'userId', as: 'user'
    }, {
      foreignKey: 'sellerId', as: 'seller'
    }
    );
  }
  return SalesTable
}