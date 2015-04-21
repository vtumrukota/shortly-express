var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  username: null,
  password: null,
  salt: null
});

module.exports = User;





//Need to create the User Model Here
