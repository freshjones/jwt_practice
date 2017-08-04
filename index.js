'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var authcheck = require('./auth');
var token = require('./token');
var verify = require('./verify');
var store = require('./store');

const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.get("/", function(req, res) {
  res.send("Central Authentication Service");
});

app.get("/api", verify, function(req, res) {
  res.json({'status':'success', 'data': { message: 'hello world' } });
});

app.get("/store", store, function(req, res) {
  res.json({'status':'success', 'data': { message: 'hello world' } });
});

app.get("/login", function(req, res) {
  var basic = `
    <form method="POST" action="/authenticate">
    <input name="username" value="" type="text">
    <input name="password" value="" type="password">
    <input type="submit" name="submit" value="submit">
    </form>
  `
  res.send(basic);
});

app.post("/authenticate", authcheck, token.issue, function(req, res) {

});

app.listen(port, function() {
  console.log(`Live on port: ${port}!`);
});
