const { allProduct, product, addProduct, updateProduct, deleteProduct } = require('./product.resolvers');
const { allCategory, category, addCategory } = require('./category.resolvers');
const { login } = require('./auth.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}/);

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
    deleteProduct,
    addCategory
  },
  CategoryNameType
};

module.exports = resolvers;
