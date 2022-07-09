var express = require('express');
var router = express.Router();
var controller = require("../controllers/documento.controller");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});

/* GET users listing. */
router.get("/todos", controller.findAll);
router.post("/guardar", controller.save);
router.put("/actualizar", controller.update);
router.delete("/borrar/:id", controller.delete);
router.post("/imagen", upload.single('file'), controller.getImage);

module.exports = router;
