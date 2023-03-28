const { allProduct, product, addProduct, updateProduct, deleteProduct } = require('./product.resolvers');
const { allCategory, category } = require('./category.resolvers');

const resolvers = {
  Query: {
    hello: () => 'Hola mundo',
    product,
    allProduct,
    category,
    allCategory
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct
  }
};

module.exports = resolvers;
