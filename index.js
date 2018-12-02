var express = require('express');
var app = express();

/*
app.get('/', function (req, res) {
   res.send('Hello World from GCE!'); 
});
*/

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'Admin',
        password: 'brains1!',
        server: '35.225.192.81', 
        database: 'The_Webapp' 
    };

    // connect to your database:
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM dbo.Employee', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
//    sql.close();
});

var server = app.listen(3000, function () {
    console.log('Server is running..');
});
