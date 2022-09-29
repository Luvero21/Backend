const express = require("express");
const { patch } = require("./modulos/routerProductos.js");
const app = express();
const router = require("./modulos/routerProductos.js");
const handlebars = require("express-handlebars").engine;

const handlebarsCon = { defaultLayout: "index.handlebars" };

app.engine("handlebars", handlebars(handlebarsCon));

app.set("views", "./views");
app.set("view engine", ".handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

const PORT = 8080;

const server = app.listen(PORT, () => console.log(`Escuchando en ${PORT}`));
server.on("error", (error) => console.log(`Error en el servidor${error}`));

module.exports = server;
