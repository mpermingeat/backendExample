const { UserModel } = require("../../../database");

const createUser = async (data) => {
  const newUser = await UserModel.create(data);
  return newUser;
};

const findAllUser = async (filterExample) => {
  const users = await UserModel.findAll({
    where: {
      isDeleted: false,
      example: filterExample,
    },
  });
  return users;
};

module.exports = { userService: { create: createUser, findAll: findAllUser } };
