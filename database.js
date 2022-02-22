let mysql = require('mysql');


const connection = mysql.createConnection({
    host     : '192.168.64.2',
    user     : 'utilisateur',
    password : '',
    database :'testDerrick'
  });


  module.exports = connection;