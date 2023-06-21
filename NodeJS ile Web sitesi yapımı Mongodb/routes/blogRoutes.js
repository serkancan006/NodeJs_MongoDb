const express = require("express"),
Blog = require("../models/blogModel"),
router = express.Router();

router.get("/addNewBlog", isLoggedIn, (req, res)=>{
    res.render('blog/newblog');
});

router.post("/addNewBlog", isLoggedIn, (req, res)=>{
    // console.log(req.body.data);
    let title = req.body.data.blogTitle;
    let comSentence = req.body.data.comSentence;
    let comImage = req.body.data.comImage;
    let blog = req.body.data.blog;

    let newBlog = {
        title:title, comSentence:comSentence, comImage:comImage, blog:blog
    };

    /*
    Blog.create(newBlog)
    .then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog)
    })
    .catch((err)=>{
        console.log("===================EROR ERROR ERROR =====");
        console.log(err);
        res.send(err);
    })
    */
});

router.get('/blogs/:blogId', (req, res)=>{
    Blog.findById(req.params.blogId)
    .then((foundBlog)=>{
        res.render("blog/showblog",{foundBlog:foundBlog});
    })
    .catch((err)=>{
        console.log("========= ERROR ERROR ERROR =========");
        console.log(err);
        res.send(err);
    });
});

router.get("/testing", (req, res)=>{
    Blog.find()
    .then((foundBlogs)=>{
        res.json(foundBlogs);
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
};

module.exports = router;