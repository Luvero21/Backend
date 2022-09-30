const { Router } = require("express");
const router = Router();

const productos = require("../modulos/contenedor");

router.get("/", (req, res) => {
  res.render("form.pug");
});

router.get("/productos", (req, res) => {
  res.render("productos.pug", { productos: productos.getAll() });
});

router.post("/productos", (req, res) => {
  productos.save(req.body);
  res.redirect("/productos");
});

module.exports = router;
