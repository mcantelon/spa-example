var express = require('express');
var router = express.Router();
var memstore = require('../lib/memstore');

router.post('/', function(req, res, next) {
  // Default to "bad request" response
  var status = 400;

  if (req.body.username && req.body.password) {
    if (req.body.username == 'name' && req.body.password == 'password') {
      // Authorize
      status = 200;

      var sessionId = memstore.identifier();

      // Associate session with user
      memstore.set(sessionId, req.body.username);

      // Set cookie in response
      res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });
    } else {
      // Authorization failed
      status = 401;
    }
  }

  res.send(status);
});

module.exports = router;
