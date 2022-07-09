var express = require('express');
var router = express.Router();
var controller = require("../controllers/documento.controller");

/* GET users listing. */
router.get("/todos", controller.findAll);
router.post("/guardar", controller.save);
router.put("/actualizar", controller.update);
router.delete("/borrar/:id", controller.delete);

module.exports = router;
