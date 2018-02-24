var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// core module so that no needs to npm install for it
var path = require('path');

var app = express();



// Middleware

/* example
var logger = function(req, res, next){
  console.log('Logging ...');
  next();
}
*/


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var users = [{
  id:1,
  first_name: 'Yooseok',
  last_name: 'Seo',
  email:'yos017@ucsd.edu'
},{
  id:2,
  first_name: 'Dohwon',
  last_name: 'Seo',
  email:'baby@ucsd.edu'
},{
  id:3,
  first_name: 'Kyungmin',
  last_name: 'Seo',
  email:'baby2@ucsd.edu'
}]


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// global variable
app.use(function(req,res,next){
  res.local.errors = null;
  next();
});

// express validator middleware
app.use(expressValidator());


// Set Static path
app.use(express.static(path.join(__dirname, 'public')));

// route
app.get('/', function(req, res){
  res.render('index', {
    title:'Customers',
    users: users
  });
})

app.post('/users/add', function(req, res){
  console.log('form submiited');

  req.checkBody('first_name', 'First Name is required').notEmpty();
  req.checkBody('last_name', 'Last Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('index', {
      title:'Customers',
      users: users,
      errors:errors
    });
  }else{
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email:req.body.email
    }
      console.log('created new user');
  }






})
app.listen(3000, function(){
  console.log('server started on Port 3000 ...');
})
