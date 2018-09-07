var express = require("express");
var route = express.Router();

var burger = require("../models/burger.js")

route.get('/', function (req, res) {
    burger.all(function (stuff) {
        var hbsObject ={
            burger: stuff
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})
route.post("/api/burger", function (req, res) {
    var stuff = req.body
    burger.add(stuff, function (response) {
        res.json(true);
    })
})
route.post("/api/burger/:id", function (req, res) {
    var stuff = req.body
    burger.update(stuff, req.param.id, function (response) {
        res.json(true);
    })
})

module.exports = route;