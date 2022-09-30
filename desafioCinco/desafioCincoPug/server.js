const express = require("express");
const app = express();

const route = require("./modulos/routerProductos.js");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", route);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
