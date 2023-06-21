const express = require("express"),
Blog = require("../models/blogModel"),
router = express.Router();
/*
let data = [
    {
        postTitle:"Blog Denemesi",
        postSubtitle:"Bu ilk blog denemesi bakalım ne olacak",
        image:"https://images.unsplash.com/photo-1657264533870-187e6a18ac42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        postTitle:"Testing Blog",
        postSubtitle:"This is a blog testing",
        image:"https://images.unsplash.com/photo-1657231658825-af525fc39f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        postTitle:"Mountains Not So Far",
        postSubtitle:"Everythib that is not so far is far.",
        image:"https://images.unsplash.com/photo-1657214058744-7ff3b448c205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
    }
];
*/
router.get("/", (req, res)=>{
    //res.render('home',{data : data});
    Blog.find({},(err,foundsBlogs)=>{
        if(err){
            console.log("========= ERROR ERROR ERROR =========");
            console.log(err);
        } else {
            console.log("========= All Blogs =========");
            console.log(foundsBlogs);
            res.render('home',{foundsBlogs : foundsBlogs});
        }
    });
});

router.get("/about", (req, res)=>{
    res.render('about');
});

router.get("/contact", (req, res)=>{
    res.render('contact');
});

router.get("/post", (req, res)=>{
    res.render('post');
});

router.get("/resume", (req, res)=>{
    res.render('resume');
});

module.exports = router;