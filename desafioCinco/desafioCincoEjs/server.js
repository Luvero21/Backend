const express = require("express");
const app = express();

const router = require("./modulos/routerProductos");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en puerto ${PORT}`);
});
