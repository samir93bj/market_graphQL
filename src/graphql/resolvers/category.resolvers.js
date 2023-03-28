const boom = require('@hapi/boom');
const CategoryService = require('../../services/category.service');
const checkRolesGql = require('./../../middlewares/checkRoleGql');

const service = new CategoryService();

const category = async (_, {id}) => {
  return service.findOne(id);
};

const allCategory = async () => {
  return service.find();
};

const addCategory = async (_, {dto}, context) => {
  const { user } = await context.authenticate('jwt', {session: false});

  if (!user) {
    throw boom.unauthorized('jwt is not valid');
  }

  checkRolesGql(user, 'admin') ;

  return service.create({
    ...dto,
    image: dto.image.href
  });
};

module.exports = {
  category,
  allCategory,
  addCategory
};
