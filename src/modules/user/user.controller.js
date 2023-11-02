const { User } = require("../../../database");
const { ClientError } = require("../../utils/error/error");
const { response } = require("../../utils/error/response");
const { globalService } = require("../../service/global-service");
const { userService } = require("./user.service");

const postUser = async (req, res) => {
  const { body: data } = req;

  const newUser = userService.create(data);

  if (!newUser) throw new ClientError("Error al crear usuario", 409);

  response(res, 200, { message: "Usuario creado", newUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await globalService.deleteItem(id, User, "User");

  response(res, 200, user);
};

const getAllUser = async (req, res) => {
  const users = await userService.findAll();

  if (!users.length) throw new ClientError("Error al encontrar los usuarios", 400);

  response(res, 200, users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await globalService.findItem(id, User, "User");

  response(res, 200, user);
};

const patchUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const user = await globalService.patchItem(id, body, User, "User");

  response(res, 200, user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const user = await globalService.updateItem(id, body, User, "User");

  response(res, 200, user);
};

module.exports = {
  postUser,
  deleteUser,
  getAllUser,
  getUserById,
  patchUser,
  updateUser,
};
