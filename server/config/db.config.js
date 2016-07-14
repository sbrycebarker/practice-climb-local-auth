'use strict';

// DB CONFIG //
var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds023593.mlab.com:23593/climb-local-auth';

module.exports = function () {
  mongoose.connect(mongoURI);
  mongoose.connection.once('open', function () {
    console.log('Connected to mongoDB at', mongoURI);
  })
};