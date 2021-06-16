'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Disco = sequelize.define('Disco',{
		idDisco: {
			field: 'idDisco',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		NomeDisco: {
			field: 'NomeDisco',
			type: DataTypes.STRING,
			allowNull: false
		},
		TamanhoDisco: {
			field: 'TamanhoDisco',
			type: DataTypes.STRING,
			allowNull: false
		},
        ModeloDisco: {
			field: 'ModeloDisco',
			type: DataTypes.STRING,
			allowNull: false
		},
        SerialDisco: {
			field: 'SerialDisco',
			type: DataTypes.STRING,
			allowNull: false
		},
		FkMaquina: {
			field: 'FkMaquina',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'Discos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Disco;
};