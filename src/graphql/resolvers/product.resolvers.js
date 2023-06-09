const ProductsService = require('../../services/product.service');
const service = new ProductsService();

const product = (_, { id }) => {
  return service.findOne(id);
};

const allProduct = () => {
  return service.find('');
};

const addProduct = (_, {dto}) => {
  return service.create(dto);
};

const updateProduct = (_, {id, dto}) => {
  return service.update(id, dto);
};

const deleteProduct = async (_, {id}) => {
  await service.delete(id);
  return id;
};

const getProductByCategory = async (parent) => {
  const id = parent.dataValues.id;
  return await service.getByCategory(id);
};

module.exports = {
  product,
  allProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory
};
