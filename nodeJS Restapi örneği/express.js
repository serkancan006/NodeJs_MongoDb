var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listele',function(req, res){
    //res.send('kullanıcıları listeleyen çağrı');
    fs.readFile('kullanici.json','utf8',function(err,data){
        console.log(data);
        res.end(data);
    })
});

app.get('/ekle',function(req, res){
    //res.end('kullanıcıları ekleyen çağrı');
    var yenikullanici = {"k3":{
        "isim": req.query.isim,         //"ahmet demir",
        "sifre": req.query.sifre,       //777,
        "email": req.query.email        //"ahmetdemir@gmail.com"
    }
};
fs.readFile('kullanici.json','utf8',(err, data)=>{
    data = JSON.parse(data);
    data["k3"] = yenikullanici["k3"];
    console.log(data);
    res.end(JSON.stringify(data));
    fs.writeFile('kullanici.json',JSON.stringify(data), function(err){
        console.log("bir hata oluştu");
    });
 });
});

app.get('/sil',function(req, res){
    fs.readFile('kullanici.json','utf8',(err, data)=>{
        data = JSON.parse(data);
        var id = "k" + req.query.id;
        delete data[id];
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile('kullanici.json',JSON.stringify(data), function(err){
            console.log("bir hata oluştu");
        });
     });
});

app.get('/sorgula',function(req, res){
    fs.readFile('kullanici.json','utf8',(err, data)=>{
        data = JSON.parse(data);
        var id = "k" + req.query.id;
        console.log(data[id]);
        res.end(JSON.stringify(data[id]));
     });
});

var server = app.listen(8000, function(){
    console.log('sunucu çalışıyor');
});