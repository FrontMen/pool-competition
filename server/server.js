// TODO use Let's Encrypt to setup https when going public
const express = require("express");
const expressSessionSecret = require("../credentials/express-session").secret;
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const session = require("express-session");

const app = express(),
    port = process.env.PORT || 3000;

app.use(session({
    cookie: {
        secure: false
    },
    secret: expressSessionSecret,
    resave: false,
    saveUninitialized: true,
    unset: "destroy",
    rolling: true
}));

let router = express.Router();

mongoose.connect('mongodb://localhost:27017/poolcompetition', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Accept, Access-Control-Allow-Origin");
    next();
});
app.options("/*", function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
    res.status(200).send();
});

router = require('./routes/Login')(router);
router = require('./routes/Logout')(router);
router = require('./routes/Verify')(router);
router = require('./routes/IsUser')(router);
router = require('./routes/Users')(router);
app.use('/api', router);

app.listen(port);