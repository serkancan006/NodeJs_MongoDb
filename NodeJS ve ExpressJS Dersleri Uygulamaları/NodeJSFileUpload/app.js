var Express = require('express'),
     multer  = require('multer'),
     bodyparser = require('body-parser'),
     app = Express();

app.use(bodyparser.json());

var Storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null,"./Files")
    },
    filename : function (req, file, callback) {
        callback(null,file.fieldname +"__"+Date.now()+"__"+file.originalname);
    }
});

var yukleme = multer({storage:Storage}).array("fileYukleme", 3);

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/file/upload",function(req, res){
    yukleme(req, res, (err)=>{
        if(err){
            return res.end("Birşeyler yanlış gitti");
        }
        return res.end("Dosya başarı ile eklendi");
    });
});

app.listen(3000,function(){
    console.log("listening poert number : 3000");
});
