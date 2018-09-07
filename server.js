var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var exphbs = require("express-handlebars");
var routes = require("./controller/burgers_controller.js");

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:", PORT)
})

