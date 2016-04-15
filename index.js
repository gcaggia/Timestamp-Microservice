var timestamp = require("./timestamp");
var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


// index of the website, just to explain how does it works
app.get("/", function(req, res) {
    res.render("index.html");
});

// Url API
app.get("/api/:arg", function(req, res) {
    var param = req.query.tid;
    res.end(timestamp.outPut(param));
});

app.listen(app.get('port'), function() {
    console.log("app is listening on port 8080");
});