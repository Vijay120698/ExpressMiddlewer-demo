var express=require ('express');
var app=express();
// var alert=require('alert');
var router=express.Router()



app.get('/html',function(req,res)
{
    res.sendFile(__dirname + '/'+ 'index.html');
});

app.get("/home",function(req,res)
{
    res.send('<h1>Wellcome : '+req.query['uname']+'</h1><br> <h2>Mail Id : '+req.query['mid']+'</h2>');  
});

  router.use(function(req,res,next)
{
    console.log(("welcome"));;
    console.log('Request method is',req.method,'and',req.url,'url adress pages is running');
    next();
});
 
app.get('/',function(req,res,next)
{
    console.log("first page");
    res.send("welcome to world....");
    next();
});

app.get('/contact',function(req,res,next)
{
    console.log("second page");
    res.send("2 welcome to world....");
    next();
});


router.get('/contact',function(req,res,next)
{
    console.log(" Routing... page");
    res.send("Routing .. routing..welcome to world....");
    next();
});

router.get('/',function(req,res,next)
{
    console.log("route page...");
    res.send("Route Page.. welcome to world....");
    next();
});

router.get('/exit',function(req,res,next)
{
    console.log("second page");
    res.send("2 welcome to world....");
    next();
});


const login = require("./login")
app.use('/login', login);

// app.use(function(req,res,next)
// {
//     console.log(("the end...."));;
//     res.send("the end of the line....")
//     console.log('Request method is',req.method,'and',req.url,'url adress pages is running');
//     next();
// });

app.use('/route',router);

// app.use('*',function(err,req,res,next)
// {
//     var err= new Error("page not found");
//     next(err);
// });
// app.use(function(err,req,res,next)
// {
//     console.error((err.stack));
//     res.status(500).send("Page not found");
//     console.log("wooops something went wrong...");
// });

// Catch-all for undefined routes
app.use('*', function(req, res, next) {
    var err = new Error("Page not found");
    err.status = 404;
    next(err);
});

// Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send("Page not found");
    console.log("Woops, something went wrong...");
});

app.listen(8080, function() {
    console.log('Server is running on port 8080');
});