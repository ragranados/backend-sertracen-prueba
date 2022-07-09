const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../db/dbconnection');

const documentoService = {}

//TODO: Change error attributes as needed
documentoService.save = async (nombre, apellido, email, edad, foto) => {

    const result = await db.sequelize.transaction(async (t) => {

        const newDocumento = await db.Documento.create({
            nombre,
            apellido,
            email,
            edad,
            foto
        }, {transaction: t});

    });

    return ServiceResponse(true, null);

}

documentoService.findAll = async () => {

    const result = await db.Documento.findAll({order: [['id', 'DESC']]});

    if (result.length < 1) {
        return ServiceResponse(false, []);
    }

    return ServiceResponse(true, result);

}

documentoService.update = async (documento) => {

    const result = await db.Documento.findByPk(documento.id);

    if (result === null) {
        return ServiceResponse(false, result);
    }

    const keysDocumento = Object.keys(documento);

    for (let i = 0; i < keysDocumento.length; i++) {
        result[`${keysDocumento[i]}`] = documento[`${keysDocumento[i]}`];
    }

    const newInfo = await result.save();

    return ServiceResponse(true, newInfo);

}

documentoService.delete = async (id) => {

    const count = await db.Documento.destroy({where: {id}});

    if (count == 0) {
        return ServiceResponse(false, "No se pudo borrar");
    }

    return ServiceResponse(true, null);
}

module.exports = documentoService;
