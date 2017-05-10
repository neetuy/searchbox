var express = require('express')
const validator = require('validator');
const connection = require('../config/database.js');

const router = express.Router();

module.exports = function(app, passport) {

app.post('/signup', passport.authenticate('Process-for-signup', {
  successRedirect : '/add_contact', 
  failureRedirect : '/signup'
  }));


app.post('/login', passport.authenticate('Process-for-login', {
  successRedirect : '/contact_list', 
  failureRedirect : '/add_contact',
  }), 
    function(req, res){
    if (req.body.remember) {
      req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
      req.session.cookie.expires = false;
    }
    res.redirect('/');
});

app.get('/add_contact', isLoggedIn, function(req, res) {
    res.render('ContactPage.jsx ', {
      user : req.user 
    });
  });

}



function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}
