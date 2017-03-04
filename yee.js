var express = require("express"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    path = require("path"),
    log4js = require("log4js"),
    logger = require("./logger")
    api = require("./ctrl/api")

var app = express();

var HTTP_LOG_FORMAT_DEV = ':method :url :status :response-time ms';
app.use(log4js.connectLogger(__logger, {level: "auto", format: HTTP_LOG_FORMAT_DEV}));

var circle = 360000*1000   //60小时
//app.use(session({
//    resave: false, // don"t save session if unmodified
//    cookie: {httpOnly: true, expires: new Date(Date.now() + circle), maxAge: circle},   //2小时
//    saveUninitialized: false, // don"t create session until something stored
//    secret: "yuece"
//}));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "/www")));
app.use(express.query());

app.post("/api/reportTSRank", api.reportTSRank);
app.post("/api/listTSRank", api.listTSRank);

app.set("port", 3000);
app.listen(app.get("port"));
__logger.info("服务已启动，监听端口: " + app.get("port"))