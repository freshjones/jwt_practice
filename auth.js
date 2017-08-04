var authCheck = function(req, res, next) 
{
  if(typeof req.body.username === 'undefined' || typeof req.body.password === 'undefined' )
  {
    res.status(401).send({'status':'wrong credentials'});
    return;
  }
  next();
}

module.exports = authCheck;


