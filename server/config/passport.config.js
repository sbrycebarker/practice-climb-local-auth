'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../features/users/user.server.model');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user._id)
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

// local signup / register //
passport.use('local-signup', new LocalStrategy({passReqToCallBack: true},
function (req, username, password, done) {

console.log(req.body);
  process.nextTick(function () {

    User.findOne({'username': username}, function (err, user) {
      if (err){
        console.log('err, err');
        return done(err);
      }
      if(user){
        return done(null, false);
      } else {

        var newUser = new User();
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.name = req.body.name;

        newUser.save(function(err) {
          if(err){
            throw err;
          }
          return done(null, newUser);
        })
      }
    })
  })
}))
};
