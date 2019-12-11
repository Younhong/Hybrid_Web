var http = require('http');
var express = require('express');
var app = express();

app.get("/", function(req, rep) {
    rep.end("Hello world! GET: " + req.url);
});

app.get("/public/:a", function (req, rep) {
    rep.sendFile("/var/www/html/node/"+req.params.a);
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