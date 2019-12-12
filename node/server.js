var http = require('http');
var express = require('express');
var app = express();
var router = require('./router.js');
var booksRouter = require('./books.js');
var request = require('request');

app.get("/public/:a", function (req, rep) {
    rep.sendFile("/var/www/html/node/"+req.params.a);
});

app.use(express.json());
app.use('/router', router);
app.use('/books', booksRouter);

app.get("/", function(req, rep) {
    rep.end("Hello world! GET: " + req.url);
});

var chats = [];

app.post("/send2", function(req, res) {
    var message = {
        sender: req.body.sender,
        ko: req.body.ko,
        en: req.body.en
    };
    console.log(message);
    var options = {
        url: "https://openapi.naver.com/v1/papago/n2mt",
        form: {
            source: message.ko.length == 0 ? "en" : "ko",
            target: message.ko.length == 0 ? "ko" : "en",
            text: message.ko.length == 0 ? message.en : message.ko
        },
        headers: {
            "X-Naver-Client-Id": "6RnHs0BOjMyIZO44xQvv",
            "X-Naver-Client-Secret": "t91VfGi4_K",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    };
    request.post(options, function(error, response) {
        var result = JSON.parse(response.body).message.result;
        message.ko = message.ko.length == 0 ? result.translatedText : message.ko;
        message.en = message.en.length == 0 ? result.translatedText : message.en;
        console.log(message);
        chats.push(message);
        res.status(200).send({message: "Success"});
    });
});

app.get("/receive2", function(req, res) {
    var result = { total: chats.length, chats: [] };
    if (chats.length > req.query.from) {
        result.chats = chats.slice(req.query.from);
    }
    res.status(200).send(result);
});

var todos = {};

app.post("/todos", function (req, res) {
    todos = req.body.todos;
    console.log(req.body);
    res.status(200).send({ message: "success" });
});

app.get("/todos", function (req, res) {
    res.status(200).send(todos);
});

app.get("/plus/:a/:b", function (req, rep) {
    rep.end(String(Number(req.params.a) + Number(req.params.b)));
});
app.get("/minus/:a/:b", function (req, rep) {
    rep.end(String(Number(req.params.a) - Number(req.params.b)));
});
app.get("/mult/:a/:b", function (req, rep) {
    rep.end(String(Number(req.params.a) * Number(req.params.b)));
});
app.get("/div/:a/:b", function (req, rep) {
    rep.end(String(Number(req.params.a) / Number(req.params.b)));
});

var counter = 0;
app.get("/counter", function (req, rep) {
    var date=new Date();
    var response = {
        date: date.getFullYear() + "-" + (date.getMonth()  + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes(),
        counter: ++counter
    }
    rep.end(JSON.stringify(response));
});

var messages = [];
app.get("/receive", function (req, rep) {
    if (messages.length <= req.query.from)
        rep.end();
    else {
        var result = {
            total: messages.length,
            messages: messages.slice(req.query.from)
        }
        rep.end(JSON.stringify(result));
    }
});
app.get("/send", function (req, rep) {
    messages.push({
        sender: req.query.sender,
        message: req.query.message
    });
   rep.end();
});

http.createServer(app).listen(3000);