var token = {} 
var jwt = require('jsonwebtoken');
var config = require('./config');

token.issue = function(req, res, next) 
{
  var profile = {
    id:1234,
    name:'billy',
    email:'billy@freshjones.com'
  };
  var token = jwt.sign(profile, config.secret, {
    expiresIn: 60
  });
  res.redirect('/store?token=' + token + '&expires=' + 60);
  //req.body.token = token;
  //next();
}

module.exports = token;


