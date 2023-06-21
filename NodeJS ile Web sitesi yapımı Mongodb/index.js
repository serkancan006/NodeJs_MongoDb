const mongoose        = require("mongoose"),
      express         = require("express"),
      passport        = require("passport"),
      LocalStrategy   = require("passport-local"),
      expressSession  = require('express-session'),
      User            = require('./models/userModel'),
      bodyparser      = require('body-parser'),
      app             = express();

//Routes
const indexRoutes = require('./routes/indexRoutes'),
      adminRoutes = require('./routes/adminRoutes'),
      blogRoutes = require('./routes/blogRoutes');

//App Config
mongoose.connect("mongodb://localhost/BlogApp");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

//passport Config
app.use(require("express-session")({
    secret:"bu bizim güvenlik cümlemizdir",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Share current user info withing all routes
app._router.use((req, res, next)=>{
    res.locals.currentUser=req.User;
    next();
})

//Routes using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

const server = app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("App Started. Port number : %d",server.address().port);
});