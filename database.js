const mysql = reqiere('mysql');

const dbcon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'toDoList'
});

dbcon.connect(function(err) {
    if(err) throw err;
        console.log('Error connecting to database');
        return;
});

module.exports = dbcon;