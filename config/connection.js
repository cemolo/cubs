var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {

	connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {

	connection = mysql.createConnection({
	port: 3306,	
	host:'i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'mlhsl26o6ara536h',
	password: "xybgddm43kbdwco1",
	database: 'qcbsmoafu1df5h5k',

});
	
};

connection.connect();

module.exports = connection;





