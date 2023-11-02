const { Router } = require("express");
const routerUser = Router();
const {
  addUser,
  deleteUser,
  getAllUser,
  getUserById,
  patchUser,
  updateUser,
} = require("./user.controller");

routerUser
  .post("/", addUser)
  .put("/:id", updateUser)
  .patch("/:id", patchUser)
  .delete("/:id", deleteUser);

routerUser.get("/", getAllUser).get("/:id", getUserById);

module.exports = { routerUser };
