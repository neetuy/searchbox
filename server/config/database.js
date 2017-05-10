// var express    = require("express");
// var mysql      = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'ContactManager'
// });

// var app = express();

// connection.connect(function(err){
// if(!err) {
//     console.log("\n Database is connected successfully \n");    
// } else {
//     console.log("\n Error in database connection \n");    
// }
// });


// module.exports = connection;

module.exports = {
    'connection': {
        'host'	  : 'localhost',
        'user'	  : 'root',
        'password': 'root'
    },
	'database': 'AuthContactManager',
    'mytable': 'users'
};