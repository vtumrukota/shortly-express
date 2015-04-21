var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link');

var User = db.Model.extend({
  tableName: 'users',
  username: null,
  password: null,
  salt: null,
  links: function(){
    return this.hasMany(Link);
  }
});

module.exports = User;





//Need to create the User Model Here
