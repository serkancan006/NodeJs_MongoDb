const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();


const app = express();
app.use("/assets",express.static('assets'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cordova"
});

con.connect(function(err) {
    if(err) throw(err)  
    else console.log('Succesfuly database:')
});

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/',encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    con.query('select * from uyeler where k_adı = ? and sifre = ?',[username,password],function(error,result,field){
        if(result.length>0){
            res.redirect('/home.html');
        } else{
            res.redirect("/");
        }
        res.end();
    })
})

app.get('/home.html',function(req, res){
    res.sendFile(__dirname + "/home.html");
})

app.listen(4500);
