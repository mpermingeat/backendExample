const express = require("express");
const morgan = require("morgan");
const routerApi = require("./src/routes");
const response = require("./src/utils/error/response");
const port = 3001;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Content-Length"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(morgan("dev"));

app.use("/", express.json());
app.use("/", routerApi);

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  console.log(err);
  response(res, statusCode, message);
});

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
