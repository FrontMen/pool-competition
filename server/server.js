const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    next();
});

app.post('/register-user', function(req,res,send){
    res.send({ foo: "bar"});
});

app.listen(port);