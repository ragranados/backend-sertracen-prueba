const {Sequelize, DataTypes} = require('sequelize');

const documento = (sequelize) => {
    const documento = sequelize.define('documento', {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            edad: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            foto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });

    return documento;

}


module.exports = documento;
