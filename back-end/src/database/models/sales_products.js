const SalesProductSchema = (sequelize, DataTypes) => {
  const SalesProductsTable = sequelize.define('sales_products', {
    saleId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    quantity: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products'
  })

  SalesProductsTable.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: SalesProductsTable,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: SalesProductsTable,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  }

  return SalesProductsTable
}

module.exports = SalesProductSchema;