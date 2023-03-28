const CategoryService = require('../../services/category.service');
const service = new CategoryService();

const category = async (_, {id}) => {
  return service.findOne(id);
};

const allCategory = async () => {
  return service.find();
};

module.exports = {
  category,
  allCategory
};
