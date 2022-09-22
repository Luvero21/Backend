const express = require('express');

const apiProductos = require('../modulos/metodos/index.js');

const router = express.Router();

router.get('/',apiProductos.getAll)
router.get('/:id',apiProductos.getById)
router.post('/',apiProductos.post)
router.put('/:id',apiProductos.put)
router.delete('/:id',apiProductos.delet)

module.exports = router;

