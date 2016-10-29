var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool

var config = {
   host: 'db.imad.hasura-app.io',
   user: 'nikku18',
  port: '5432',
  database: 'nikku18',
  password: process.env.DB_PASSSWORD
};

var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  pool.query('SELECT * FROM test',function(err,req));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
