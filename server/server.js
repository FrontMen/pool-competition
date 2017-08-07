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
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    next();
});

router = require('./routes/Users')(router);
app.use('/api', router);

app.listen(port);