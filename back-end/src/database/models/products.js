const ProductsSchema = (sequelize, DataTypes) => {
  const ProductsTable = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
    },
    urlImage: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  })
  return ProductsTable
}

module.exports = ProductsSchema;