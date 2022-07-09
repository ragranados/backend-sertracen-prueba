const ApiResponse = require("../responses/ApiResponse");
const ServicioDocumento = require('../services/documento.service');
var path = require('path');
const { PassThrough } = require("stream");

const documentoController = {}

documentoController.save = async (req, res, next) => {
    try {
        const { nombre, apellido, email, edad, foto } = req.body;

        const { status, content } = ServicioDocumento.save(nombre, apellido, email, edad, foto);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

documentoController.findAll = async (req, res, next) => {
    try {
        const { status, content } = await ServicioDocumento.findAll();

        if (!status) {
            return res.status(200).json(ApiResponse(status, "No se obtuvieron resultados", content));
        }

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

documentoController.update = async (req, res, next) => {
    try {

        const { status, content } = await ServicioDocumento.update(req.body);

        return res.status(200).json(ApiResponse(status, "Actualizado con exito", content));
    } catch (e) {
        next(e);
    }

}

documentoController.delete = async (req, res, next) => {
    try {

        const id = req.params.id;

        const { status, content } = await ServicioDocumento.delete(id);

        return res.status(200).json(ApiResponse(status, "Actualizado con exito", content));
    } catch (e) {
        next(e);
    }
}

documentoController.getImage = async (req, res, next) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        return res.status(200).json(req.file.filename)
    }
}

documentoController.sendFile = async (req, res, next) => {

    const { imagen } = req.params;

    return res.sendFile(path.join(__dirname, `/../public/${imagen}`));
}

module.exports = documentoController;
