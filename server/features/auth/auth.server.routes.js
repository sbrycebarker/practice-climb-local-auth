'use strict';


module.exports = function (app, passport) {


  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/registerSuccess',
      failureRedirect: '/registerFailure'
    })
  );


  //failure route//
  app.get('/registerFailure', function (req, res) {
    res.send('Unable to create new user');
  });

// user sign up success route//

  app.get('/registerSuccess', function(req, res) {
    console.log('**** ==== CREAT NEW USER SUCCESS ==== ****');
    res.status(200).json({user: req.user});
  });

};
