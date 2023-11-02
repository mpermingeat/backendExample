const { Router } = require("express");
const routerApi = Router();
// Ordenar alfabeticamente por favor

const { routerDollar } = require("./entities/dollar");
const { routerInvoice } = require("./entities/invoice");
const { routerProduct } = require("./entities/product");
const { routerUserInfo } = require("./entities/user-info");
const { routerUser } = require("./entities/user");

routerApi.use("/dollar", routerDollar);
routerApi.use("/invoice", routerInvoice);
routerApi.use("/product", routerProduct);
routerApi.use("/userinfo", routerUserInfo);
routerApi.use("/user", routerUser);

module.exports = routerApi;
