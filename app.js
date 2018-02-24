var express = require('express');
var bodyParser = require('body-parser');


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
  email:'yos017@ucsd.edu',
  age:'38'
},{
  id:2,
  first_name: 'Dohwon',
  last_name: 'Seo',
  email:'baby@ucsd.edu',
  age:'4'
},{
  id:3,
  first_name: 'Kyungmin',
  last_name: 'Seo',
  email:'baby2@ucsd.edu',
  age:'39'
}]


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static path
app.use(express.static(path.join(__dirname, 'public')));

//    route   //
app.get('/', function(req, res){
  res.render('index', {
    title:'Customers'
  });
})

app.listen(3000, function(){
  console.log('server started on Port 3000 ...');
})
