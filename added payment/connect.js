/* 
	connect.js
	Run this program to see if Node.js can connect to MySQL DB using 
	MySQL module.
	To run: node connect.js
*/

var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "user99",
password: "user99",
database: "com3105"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.end();
});
