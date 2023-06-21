var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

var sehirlerr = ["istanbul","izmir","ankara","mersin","malatya"];

app.get("/",function(req, res){
    res.render("home");
});

app.get("/sehirler",function(req, res){
    res.render("sehirler", {sehirler : sehirlerr});
});

app.post("/sehirEkle",function(req, res){
    var yeniSehir = req.body.yenisehir;
    sehirlerr.push(yeniSehir);
    res.redirect("/sehirler");
}); //npm install body-parser --save    app.use(bodyparser.urlencoded({extended:true}));

var server = app.listen(3000,function(){
    console.log("Sunucu portu : %d",server.address().port);
});