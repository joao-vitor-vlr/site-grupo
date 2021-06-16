'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let relatorioMaquina = sequelize.define('relatorioMaquina',{
        idRelatorio: {
            field: 'idRelatorio',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DataHora: {
            field: 'DataHora',
            type: DataTypes.DATE,
            allowNull: true
        },
        UsoCPU: {
            field: 'UsoCPU',
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        UsoMemoria: {
            field: 'UsoMemoria',
            type: DataTypes.DECIMAL, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
            allowNull: true
        },
        fkMaquina: {
            field: 'fkMaquina',
            type: DataTypes.INTEGER, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
            allowNull: false
        },
        HorasUsado: {
            field: 'HorasUsado',
            type: DataTypes.FLOAT, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
            allowNull: true
        },
        UsoDisco: {
            field: 'UsoDisco',
            type: DataTypes.DECIMAL, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
            allowNull: true
        },
        TotalDisco: {
            field: 'TotalDisco',
            type: DataTypes.DECIMAL, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
            allowNull: true
        }
    }, 
    {
        tableName: 'relatorioMaquina', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    });

    return relatorioMaquina;
};