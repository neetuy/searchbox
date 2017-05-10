var mysql = require('mysql');
var dbconfig = require('../server/config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('\
	CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.mytable + '` ( \
	    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
	    `username` VARCHAR(20) NOT NULL, \
	    `password` CHAR(60) NOT NULL, \
	        PRIMARY KEY (`id`), \
	    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
	    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
	)'
);

console.log('Successfully Database Created ... bingo !!!');

connection.end();
