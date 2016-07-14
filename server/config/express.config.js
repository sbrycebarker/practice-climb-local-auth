'use strict';

// MODULES //
var express    = require('express');
var session    = require('express-session');
var bodyParser = require('body-parser');
var cors       = require('cors');
var logger     = require('morgan');

module.exports = function () {

  var app = express();

  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(session({
    secret: 'aksldjfaksjfklas242342dfklajsdklfjaf',
    saveUninitialized: false,
    resave: false
  }));

  app.use(express.static('public'));

  return app;

};