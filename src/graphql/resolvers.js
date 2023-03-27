const { allProduct, product, addProduct } = require('./product.resolvers');

const resolvers = {
  Query: {
    hello: () => 'Hola mundo',
    product,
    allProduct,
  },
  Mutation: {
    addProduct
  }
};

module.exports = resolvers;
