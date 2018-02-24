# expressCrashTutorial
This is express Crash Tutorial

inspried by

ExpressJS Crash Course<br />
https://www.youtube.com/watch?v=gnsO8-xJ8rs&t=263s

$ npm init - creating package.json<br />
$ npm install express --save<br />
$ npm install body-parser --save<br />
$ npm install nodemon -g<br />
$ npm install ejs --save<br />
$ npm install express-validator --save<br />

ejs Syntax

<%= {{variable name}} %><br />
<% include partials/{{directory name}} %><br />

for loop Syntax

<% arrayObj.forEach(function(obj){ %> <br />
  <% = obj.attr %> <br />
<% }) %><br />

req variable

req.body.{name attr from HTML tag}<br />


express-validator usage

req.checkBody('{{id from HTML tag}}', '{{error message}}').notEmpty()<br />

var errors = req.validationErrors();<br />
