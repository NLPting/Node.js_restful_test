var express = require('express');
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://ting:t3034@140.114.77.135:5432/mydb1");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


db.one("SELECT * from user_tbl")
    .then(function (data) {
        console.log("DATA:", data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
