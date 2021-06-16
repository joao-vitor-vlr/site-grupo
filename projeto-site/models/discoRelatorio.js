'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let RelatorioDisco = sequelize.define('RelatorioDisco',{
		idRelatorioDisco: {
			field: 'idRelatorioDisco',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		dataHora: {
			field: 'dataHora',
			type: DataTypes.STRING,
			allowNull: true
		},
		usoDisco: {
			field: 'usoDisco',
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		fkDisco: {
			field: 'fkDisco',
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, 
	{
		tableName: 'relatorioDiscos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return RelatorioDisco;
};
