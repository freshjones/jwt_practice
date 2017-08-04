var jwt = require('jsonwebtoken');
var config = require('./config');

var verify = function(req, res, next) 
{
  if(
    req.headers['authorization'] && 
    req.headers['authorization'].startsWith('Bearer')
  )
  {
    var jwt_token = req.headers['authorization'].substr(7);
    return jwt.verify(jwt_token, config.secret, function(err, decoded) {
      if(decoded)
        return next();
      res.status(401).send({'status':err.message});
    });
  }
  res.status(401).send({'status':'you must provide an access token'});
}

module.exports = verify;
