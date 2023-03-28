const { allProduct, product, addProduct, updateProduct, deleteProduct } = require('./product.resolvers');
const { allCategory, category } = require('./category.resolvers');
const { login } = require('./auth.resolvers');

const resolvers = {
  Query: {
    product,
    allProduct,
    category,
    allCategory
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct
  }
};

module.exports = resolvers;
