'use strict';
​
// const bcrypt   = require('bcryptjs');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
​
var UserSchema = new Schema({
  name: {type: String},
  username: {type: String},
  password: {type: String}
});
​
​
module.exports = mongoose.model('User', UserSchema);
