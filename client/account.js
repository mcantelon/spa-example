var $ = require('jquery');
require('jquery.cookie');

// Authenticate (if successful, results in cookie being set in response)
exports.authenticate = function(username, password, cb) {
  $.ajax({
    'url': '/account',
    'method': 'POST',
    'data': {
      'username': username,
      'password': password
    }
  }).done(function() {
    $.cookie('authorized', true);
    cb();
  }).fail(function(err) {
    exports.logout();
    cb(1);
  });
};

// Unset cookie
exports.logout = function() {
  $.removeCookie('authorized');
};

// Check if currently authorized (cookie set)
exports.authorized = function() {
  return $.cookie('authorized') !== undefined;
};
