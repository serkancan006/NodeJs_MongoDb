//npm install express(framework)
var express = require("express");
var app = express();

/*
app.get("/",function(req, res){
    res.send("merhabalar, bu bir express örneğidir");
});
*/
app.use(express.static("public"));
app.set("view engine", "ejs") //.ejs eklerini yazmamıza gerek kalmaz



app.get("/",function(req, res){
    res.render("home");
}); //npm instal ejs --save(modülü yüklenmeli)

app.get("/test/:herhangiBisey/yorum/:asfas",function(req, res){
    res.send("<h1>Bu Bir yorum denemesidir.</h1>");
});

app.get("/test",function(req, res){
    res.send("Bu Bir test denemesir.");
});

app.get("/test/:bisey",function(req, res){
    testparameter = req.params.bisey;
    res.render("test.ejs",{testparameter});
    //res.render("test.ejs",{bisey:"bu da bisey"});
});

app.get("*",function(req, res){
    res.send("Sayfa Bulunamadı");
});

var server = app.listen(3000,function(){
    console.log("Sunucu şuanda bu port numarasında : %d",server.address().port);
});