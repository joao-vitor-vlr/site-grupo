'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Maquina = sequelize.define('Maquina',{
        idMaquina: {
            field: 'idMaquina',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProcessador: {
            field: 'idProcessador',
            type: DataTypes.STRING,
            allowNull: true
        },
        nomeCPU: {
            field: 'NomeCPU',
            type: DataTypes.STRING,
            allowNull: true
        },
        hostName: {
            field: 'hostName',
            type: DataTypes.STRING,
            allowNull: true
        },
        MemoriaTotal:{
            field: 'MemoriaTotal',
            type: DataTypes.STRING,
            allowNull: true
        },
        FreqCPU:{
            field: 'FreqCPU',
            type: DataTypes.STRING,
            allowNull: true
        },
        SysOperacional:{
            field: 'SysOperacional',
            type: DataTypes.STRING,
            allowNull: true
        },
        TotalDisco:{
            field: 'TotalDisco',
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    }, 
    {
        tableName: 'maquina', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    });

    return Maquina;
};