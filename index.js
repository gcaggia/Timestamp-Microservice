var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res) {
    res.render("index.html");
});

app.listen(app.get('port'), function() {
    console.log("app is listening on port 8080");
});